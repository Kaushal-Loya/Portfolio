"use client"

import { Trophy, Users, Code, Award } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"

const experiences = [
  {
    icon: Trophy,
    title: "3rd Place – Hack101 Hackathon",
    date: "2024",
    description:
      "Secured third place in a college-level hackathon organized by the ACM Student Chapter by building an innovative technical solution as part of a team.",
  },
  {
    icon: Award,
    title: "Model United Nations – ECOSOC Committee",
    date: "2024",
    description:
      "Represented Suriname as a delegate, participating in discussions on the transition from relief to development and contributing to policy debates and resolution drafting.",
  },
  {
    icon: Users,
    title: "Volunteer – WeBots Hackathon",
    date: "2025",
    description:
      "Guided participants in robotics simulation using Webots, supporting hands-on learning and collaborative problem-solving during the hackathon.",
  },
  {
    icon: Users,
    title: "CSE Department Head – Gokulashtami 2025",
    date: "2025",
    description:
      "Led the CSE department procession as one of four heads during Gokulashtami, the largest cultural event at Amrita Vishwa Vidyapeetham.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <div className="space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon
                return (
                  <SpotlightCard key={exp.title} spotlightColor="rgba(0, 229, 255, 0.25)">
                    <div
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
