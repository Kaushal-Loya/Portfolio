"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient">Kaushal Loya</span>
          </h1>

          <div className="h-12 md:h-16">
            <p
              key={titleIndex}
              className="text-2xl md:text-4xl text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              {titles[titleIndex]}
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable, intelligent systems that solve real-world problems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="glow group" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Download Resume</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-8">
            <a
              href="https://github.com/Kaushal-Loya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaushal-loya-81207731b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kaushalloya5@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
