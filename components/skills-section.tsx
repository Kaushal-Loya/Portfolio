"use client"

import { Code2, Database, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go"],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Express.js", "REST APIs"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
