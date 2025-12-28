"use client"

import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Let's build something amazing together.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
                <div className="glass p-8 md:p-12 rounded-2xl space-y-6">
                  <h3 className="text-2xl font-semibold text-center">Connect With Me</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <a
                      href="mailto:kaushalloya5@gmail.com"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all group border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Email</span>
                    </a>

                    <a
                      href="https://github.com/Kaushal-Loya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all group border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">GitHub</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/kaushal-loya-81207731b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all group border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </a>

                    <a
                      href="https://www.instagram.com/kaushalloya_356"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all group border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Instagram className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
