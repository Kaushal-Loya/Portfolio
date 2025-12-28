"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { TiltedCard } from "@/components/tilted-card"
import { SpotlightCard } from "@/components/spotlight-card"

const projects = [
  {
    title: "JobGenie – AI-Powered Career Assistant",
    description:
      "Intelligent job search agent that automates finding job listings on company career pages, extracts relevant details, and matches them with user preferences.",
    tech: ["FastAPI", "Python", "Web Scraping", "AI Automation"],
    github: "https://github.com/adithya-menon-r/JobGenie",
    demo: "#",
  },
  {
    title: "Sketch2Spec – AI-Powered UI Code Generator",
    description:
      "AI-driven system that converts hand-drawn or digital wireframes into functional React/Next.js components with clean, production-ready code.",
    tech: ["Next.js", "TypeScript", "Gemini API", "React"],
    github: "https://github.com/Kaushal-Loya/Sketch2Spec",
    demo: "https://sketch2spec.vercel.app/",
  },
]


export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <div className="space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <TiltedCard
                  key={project.title}
                  containerHeight="100%"
                  containerWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showTooltip={false}
                >
                  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
                    <div
                      className="glass p-6 rounded-2xl h-full flex flex-col transition-all duration-300 group hover:glow"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                      }}
                    >
                      <div className="space-y-4 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>

                        <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-md bg-accent/20 text-xs text-muted-foreground border border-accent/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <Button size="sm" variant="outline" asChild className="flex-1 bg-secondary/40 hover:bg-secondary/50 hover:text-muted-foreground dark:hover:text-muted-foreground border border-border/40 dark:border-muted/40 backdrop-blur-sm">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild className="flex-1">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
