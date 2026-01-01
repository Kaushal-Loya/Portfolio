"use client"

import { Code2, Database, Brain, Wrench } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C++", "C", "Java"],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["React", "React Native", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Node.js", "Express.js", "Django"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Scikit-learn", "pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Docker", "Linux", "VS Code", "Postman"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <div className="space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Technical <span className="text-gradient">Skills</span>
            </h2>

            {/* First 3 cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {skillCategories.slice(0, 3).map((category, idx) => {
                const Icon = category.icon
                return (
                  <SpotlightCard key={category.title} spotlightColor="rgba(0, 229, 255, 0.25)">
                    <div
                      className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group hover:glow"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                )
              })}
            </div>

            {/* Last 2 cards centered */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
              {skillCategories.slice(3).map((category, idx) => {
                const Icon = category.icon
                return (
                  <SpotlightCard key={category.title} spotlightColor="rgba(0, 229, 255, 0.25)">
                    <div
                      className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group hover:glow"
                      style={{
                        animationDelay: `${(idx + 3) * 100}ms`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}