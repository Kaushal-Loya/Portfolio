"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Instagram, Sun, Moon, Sunset } from "lucide-react"

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [greeting, setGreeting] = useState("")
  const titles = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Explorer"]

  useEffect(() => {
    // Set greeting based on time
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Good morning. Have a good day!")
    } else if (hour < 17) {
      setGreeting("Good afternoon. Have a good day!")
    } else {
      setGreeting("Good evening!")
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section className="relative flex-1 flex items-center justify-center px-4 py-4">
      <div className="container mx-auto text-center">
        <div className="glass-hero p-8 md:p-16 rounded-[2.5rem] max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Greeting Badge - Top Center */}
            {greeting && (
              <div className="flex justify-center items-center gap-2 animate-in fade-in slide-in-from-top duration-700">
                {new Date().getHours() < 12 ? (
                  <Sun className="h-5 w-5 text-primary/70" />
                ) : new Date().getHours() < 18 ? (
                  <Sunset className="h-5 w-5 text-primary/70" />
                ) : (
                  <Moon className="h-5 w-5 text-primary/70" />
                )}
                <span className="text-lg md:text-xl text-muted-foreground font-semibold">{greeting}</span>
              </div>
            )}

            {/* Profile Photo and Name */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background">
                  <img
                    src="/Kaushal_1.jpeg"
                    alt="Kaushal Loya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Kaushal Loya</span>
                </h1>
                <div className="h-8 md:h-10 mt-2">
                  <p
                    key={titleIndex}
                    className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500"
                  >
                    {titles[titleIndex]}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building scalable, intelligent systems that solve real-world problems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-0">
              <Button size="lg" className="glow group" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:text-muted-foreground dark:hover:text-muted-foreground" asChild>
                <a href="/Kaushal_Resume.pdf" target="blank ">Download Resume</a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center items-center pt-4">
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
                href="https://www.instagram.com/kaushalloya_356"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:kaushalloya5@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-border/30 self-stretch mx-2"></div>
            <div className="block lg:hidden h-px bg-border/30 my-2"></div>

            {/* Right column: About Me description */}
            <div className="flex-1 flex flex-col justify-center text-left space-y-4 lg:pl-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I'm a Computer Science &amp; Engineering student who enjoys solving problems and building software that is simple, clean,
                and useful. I like understanding how things work and turning ideas into working solutions through code.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I mainly work on building scalable applications and exploring how software and artificial intelligence come together.
                Whether it's designing a user-friendly interface or reliable backend logic, I enjoy the entire development
                process.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I'm currently looking for opportunities to learn, collaborate with motivated teams, and contribute to projects that
                create real-world impact.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
