"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
              <div className="glass p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required className="bg-secondary/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-secondary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full glow">
                    Send Message
                  </Button>
                </form>
              </div>
            </SpotlightCard>

            {/* Contact Info */}
            <div className="space-y-8">
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
                <div className="glass p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-semibold">Connect With Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:kaushalloya5@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>kaushalloya5@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/Kaushal-Loya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <span>github.com/Kaushal-Loya</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kaushal-loya-81207731b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <span>linkedin.com/in/Kaushal Loya</span>
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
