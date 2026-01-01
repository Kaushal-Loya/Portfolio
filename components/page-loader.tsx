"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Custom themed loader matching the portfolio design
function ThemedLoader() {
    const transition = (x: number) => {
        return {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop" as const,
            delay: x * 0.2,
            ease: "easeInOut" as const,
        };
    };

    return (
        <div className="flex items-center gap-3">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 12, 0] }}
                transition={transition(0)}
                className="h-5 w-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50"
            />
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 12, 0] }}
                transition={transition(1)}
                className="h-5 w-5 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg shadow-accent/50"
            />
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 12, 0] }}
                transition={transition(2)}
                className="h-5 w-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50"
            />
        </div>
    );
}

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial page load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-8">
                        <ThemedLoader />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <p className="text-sm font-medium text-gradient">
                                Loading...
                            </p>
                            <motion.div
                                className="h-1 w-32 overflow-hidden rounded-full bg-muted"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
