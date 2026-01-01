"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Trophy, Users, Award } from "lucide-react";

interface Achievement {
    icon: typeof Trophy;
    category: string;
    title: string;
    date: string;
    description: string;
    highlights: string[];
    image: string;
}

const achievements: Achievement[] = [
    {
        icon: Trophy,
        category: "Hackathon",
        title: "3rd Place – Hack101 Hackathon",
        date: "2024",
        description: "Secured third place in a college-level hackathon organized by the ACM Student Chapter.",
        highlights: [
            "Built innovative technical solution",
            "Competed against multiple teams",
            "Recognized for implementation quality"
        ],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
    },
    {
        icon: Award,
        category: "Leadership",
        title: "Model United Nations – ECOSOC Committee",
        date: "2024",
        description: "Represented Suriname as a delegate in discussions on \"Transition from relief to development\".",
        highlights: [
            "Conducted extensive policy research",
            "Engaged in diplomatic negotiations",
            "Contributed to resolution drafting"
        ],
        image: "/MUN.jpeg"
    },
    {
        icon: Users,
        category: "Volunteering",
        title: "Volunteer – WeBots Hackathon",
        date: "2025",
        description: "Guided participants in robotics simulation using Webots.",
        highlights: [
            "Provided technical support",
            "Facilitated collaborative learning",
            "Organized hackathon activities"
        ],
        image: "/Webots.png"
    },
    {
        icon: Users,
        category: "Cultural Leadership",
        title: "CSE Department Head – Gokulashtami 2025",
        date: "2025",
        description: "Led the CSE department procession during Gokulashtami - the largest cultural event at Amrita Vishwa Vidyapeetham.",
        highlights: [
            "Coordinated department participation",
            "Led team of students",
            "Demonstrated leadership skills"
        ],
        image: "/Gokulashtami.jpeg"
    }
];

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const Icon = achievement.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="perspective-1000 h-[480px] w-full"
        >
            <motion.div
                className="relative h-full w-full cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Front of card */}
                <div
                    className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden backface-hidden shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative h-full w-full">
                        <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <span className="px-4 py-2 rounded-full bg-primary backdrop-blur-md text-primary-foreground text-sm font-bold border-2 border-primary/30 shadow-lg dark:bg-accent dark:text-accent-foreground dark:border-accent/30">
                                    {achievement.category}
                                </span>
                                <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-md border-2 border-primary/40 shadow-lg dark:bg-accent/20 dark:border-accent/40">
                                    <Icon className="h-6 w-6 text-primary dark:text-accent" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-white/80 mb-2">{achievement.date}</p>
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {achievement.title}
                                </h3>
                                <p className="text-xs text-white/60 mt-2">Click to see details</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className="absolute inset-0 h-full w-full rounded-2xl glass p-5 backface-hidden border-4 border-primary/50 shadow-2xl bg-card ring-2 ring-accent/30"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    <div className="h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <span className="text-xs text-primary font-medium">{achievement.category}</span>
                                <h3 className="text-lg font-bold mt-1 leading-tight">{achievement.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                            </div>
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {achievement.description}
                        </p>

                        <div className="flex-1">
                            <h4 className="text-sm font-semibold mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                                {achievement.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-xs text-muted-foreground/60 text-center mt-3 pb-1">
                            Click to flip back
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function AchievementsSection() {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    React.useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="achievements" className="relative py-32 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="glass p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                        <span className="text-gradient">Achievements</span> & Experience
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        A showcase of accomplishments, leadership roles, and memorable experiences
                    </p>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        {canScrollLeft && (
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-all hover:scale-110"
                                aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                        )}

                        {canScrollRight && (
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-all hover:scale-110"
                                aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        )}

                        {/* Carousel Container */}
                        <div
                            ref={scrollRef}
                            onScroll={checkScroll}
                            className={`flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-6 ${achievements.length <= 3 ? 'justify-center' : 'justify-start'
                                }`}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {achievements.map((achievement, index) => (
                                <div
                                    key={achievement.title}
                                    className={`flex-shrink-0 ${achievements.length === 1 ? 'w-full max-w-[400px]' :
                                            achievements.length === 2 ? 'w-full md:w-[calc(50%-12px)] max-w-[400px]' :
                                                achievements.length === 3 ? 'w-full md:w-[calc(33.333%-16px)] max-w-[380px]' :
                                                    'w-[320px]'
                                        }`}
                                >
                                    <AchievementCard
                                        achievement={achievement}
                                        index={index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
