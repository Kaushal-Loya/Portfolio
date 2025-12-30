"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Track active timeline item with better bidirectional scroll handling
  useEffect(() => {
    const itemRefs = ref.current?.querySelectorAll('[data-timeline-item]');
    if (!itemRefs || itemRefs.length === 0) return;

    const updateActiveItem = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Only update if the closest item is reasonably in view
      const closestRect = itemRefs[closestIndex].getBoundingClientRect();
      const isInView = closestRect.top < window.innerHeight * 0.8 &&
        closestRect.bottom > window.innerHeight * 0.2;

      if (isInView) {
        setActiveIndex(closestIndex);
      }
    };

    // Use throttled scroll listener for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveItem();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    updateActiveItem();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-timeline-item
            className="flex justify-start pt-4 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <motion.div
                  className={`h-4 w-4 rounded-full border p-2 transition-all duration-300 ${activeIndex === index
                    ? 'bg-primary border-primary shadow-[0_0_20px_rgba(96,165,250,0.6)]'
                    : 'bg-muted border-border'
                    }`}
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
            </div>

            <motion.div
              className={`relative pl-20 pr-4 md:pl-4 w-full transition-all duration-300 ${activeIndex === index
                  ? 'md:bg-card/30 md:backdrop-blur-sm md:border md:border-border/30 md:rounded-2xl md:p-6 md:shadow-lg'
                  : ''
                }`}
              animate={{
                opacity: activeIndex === index ? 1 : 0.4,
                scale: activeIndex === index ? 1 : 0.98,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300 ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </motion.div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
