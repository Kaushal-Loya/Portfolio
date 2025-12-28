"use client"

import { Trophy, Users, Code, Award } from "lucide-react"

const experiences = [
  {
    icon: Trophy,
    title: "Hackathon Winner - TechFest 2024",
    date: "March 2024",
    description:
      "First place for developing an AI-powered productivity assistant that helps students manage their study schedules.",
  },
  {
    icon: Code,
    title: "Software Engineering Intern",
    date: "Summer 2023",
    description:
      "Built scalable microservices and optimized database queries, improving application performance by 40%.",
  },
  {
    icon: Users,
    title: "Computer Science Club President",
    date: "2023 - Present",
    description:
      "Leading a team of 50+ members, organizing workshops, and fostering a collaborative learning environment.",
  },
  {
    icon: Award,
    title: "Google Code Jam Finalist",
    date: "June 2023",
    description:
      "Placed in top 500 globally in competitive programming competition, solving complex algorithmic challenges.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.title}
                  className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:glow"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.date}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
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
