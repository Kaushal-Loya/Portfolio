"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat app with intelligent message suggestions and sentiment analysis using natural language processing.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management Platform",
    description:
      "Collaborative project management tool with Kanban boards, real-time updates, and team analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-Commerce Analytics",
    description:
      "Data visualization platform for e-commerce insights with predictive sales forecasting using machine learning.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Code Snippet Manager",
    description:
      "Developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with hourly forecasts, interactive maps, and location-based recommendations.",
    tech: ["React Native", "OpenWeather API", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Blog CMS Platform",
    description: "Modern content management system with markdown support, SEO optimization, and built-in analytics.",
    tech: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className="glass p-6 hover:scale-105 transition-all duration-300 group hover:glow"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-accent/20 text-xs text-accent-foreground border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
