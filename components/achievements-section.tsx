"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Users, Mic, ExternalLink, Sparkles } from "lucide-react";

interface Achievement {
    icon: typeof Trophy;
    category: "Technical" | "Leadership" | "Debate";
    title: string;
    date: string;
    description: string;
    highlights: string[];
    image: string;
    link?: string;
}

const achievements: Achievement[] = [
    {
        icon: Trophy,
        category: "Technical",
        title: "Winter of Code – Contributor",
        date: "2026",
        description: "Contributed in the Winter of Code event during the Anokha 2026 techfest.",
        highlights: [
            "Enhanced software development skills",
            "Practical coding experience",
            "Part of Anokha's technical workshop series"
        ],
        image: "/WOC.png",
        link: "/Winter_of_code_2026_page-0001.jpg"
    },
    {
        icon: Trophy,
        category: "Technical",
        title: "AIverse One Month Hackathon – Finalist",
        date: "2026",
        description: "Finalist in the AIverse hackathon held during Anokha 2026 Techfest.",
        highlights: [
            "Explored cutting-edge AI/ML solutions",
            "Part of 13th National Level Techfest",
            "Demonstrated technical innovation"
        ],
        image: "/Achievement.png",
        link: "/AI_Verse_page-0001.jpg"
    },
    {
        icon: Trophy,
        category: "Technical",
        title: "Build2Break – Finalist",
        date: "2026",
        description: "Finalist in the Build2Break event at Anokha 2026, focuses on problem-solving and rapid prototyping.",
        highlights: [
            "Applied engineering principles",
            "Rapid product development",
            "National level competition"
        ],
        image: "Achievement.png",
        link: "/Build2Break_page-0001.jpg"
    },
    {
        icon: Users,
        category: "Leadership",
        title: "Core Team – WeBots Workshop & Hackathon",
        date: "2025",
        description: "Part of the core organizing team for a large-scale robotics workshop and hackathon.",
        highlights: [
            "Co-managed event execution & logistics",
            "Led technical sessions on robotics simulation",
            "Mentored 50+ participants in Webots"
        ],
        image: "/Webots.png",
        link: "/Webots.pdf"
    },
    {
        icon: Trophy,
        category: "Leadership",
        title: "CSE Department Head – Gokulashtami",
        date: "2025",
        description: "Led the CSE department procession during Gokulashtami cultural event.",
        highlights: [
            "Coordinated department participation",
            "Led team of students",
            "Demonstrated leadership skills"
        ],
        image: "/Gokulashtami.jpeg"
    },
    {
        icon: Trophy,
        category: "Technical",
        title: "3rd Place – Hack101 Hackathon",
        date: "2024",
        description: "Secured third place in a college-level hackathon organized by the ACM Student Chapter.",
        highlights: [
            "Built innovative technical solution",
            "Competed against multiple teams",
            "Recognized for implementation quality"
        ],
        image: "/Hackathon.jpeg",
        link: "/Hack 101.pdf"
    },
    {
        icon: Mic,
        category: "Debate",
        title: "Model United Nations – ECOSOC",
        date: "2024",
        description: "Represented Suriname as a delegate in ECOSOC committee discussions.",
        highlights: [
            "Conducted extensive policy research",
            "Engaged in diplomatic negotiations",
            "Contributed to resolution drafting"
        ],
        image: "/MUN.jpeg",
        link: "/ECOSOC.pdf"
    },
];

const categories = ["All", "Technical", "Leadership", "Debate"] as const;

function AchievementListItem({
    achievement,
    isExpanded,
    onToggle
}: {
    achievement: Achievement;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    const Icon = achievement.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`glass border rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${isExpanded ? "border-primary/50 ring-1 ring-primary/20" : "border-white/5 hover:border-white/20"
                }`}
            onClick={onToggle}
        >
            {/* Header / Collapsed View */}
            <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4 md:gap-6 flex-1">
                    <div className={`p-3 rounded-2xl transition-colors duration-300 ${isExpanded ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-white/5 text-muted-foreground group-hover:text-foreground"
                        }`}>
                        <Icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isExpanded ? "text-primary" : "text-foreground"
                            }`}>
                            {achievement.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/80">
                                {achievement.category}
                            </span>
                            <span className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                                {achievement.date}
                            </span>
                        </div>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-white/5 text-muted-foreground"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                                {/* Image Section */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="lg:col-span-5 relative aspect-[16/10] md:aspect-square lg:aspect-auto rounded-3xl overflow-hidden border border-white/10 group/img"
                                >
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                                </motion.div>

                                {/* Details Section */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="lg:col-span-7 flex flex-col justify-between space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Description</h4>
                                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Key Highlights</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {achievement.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-tight">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {achievement.link && (
                                        <div className="pt-4">
                                            <a
                                                href={achievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] active:scale-95"
                                            >
                                                <span>View Certificate</span>
                                                <ExternalLink className="h-5 w-5" />
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function AchievementsSection() {
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filteredAchievements = achievements.filter(
        a => activeCategory === "All" || a.category === activeCategory
    );

    return (
        <section id="achievements" className="relative pb-32 pt-12 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="glass p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/5 space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            My <span className="text-gradient">Achievements</span>
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-1.5 glass rounded-[2rem] w-fit mx-auto border border-white/5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 md:px-8 py-3 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                                    : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Achievement List */}
                    <div className="space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredAchievements.map((achievement, index) => (
                                <AchievementListItem
                                    key={achievement.title}
                                    achievement={achievement}
                                    isExpanded={expandedId === achievement.title}
                                    onToggle={() => setExpandedId(expandedId === achievement.title ? null : achievement.title)}
                                />
                            ))}
                        </AnimatePresence>

                        {filteredAchievements.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-24 text-muted-foreground bg-white/5 border border-dashed border-white/10 rounded-[2.5rem]"
                            >
                                <Trophy className="h-12 w-12 mb-4 opacity-20" />
                                <p className="italic text-lg">No achievements found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
