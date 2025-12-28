"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'service_88k2rx9',      // Replace with your EmailJS Service ID
        'template_0x6o52l',     // Replace with your EmailJS Template ID
        formRef.current!,
        'pWosAbNITu35T4JLy'       // Replace with your EmailJS Public Key
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        formRef.current?.reset()
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
                <div className="glass p-8 rounded-2xl">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="bg-secondary/50"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-secondary/50"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="bg-secondary/50 resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button type="submit" className="w-full glow" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <p className="text-sm text-green-500 text-center">
                        ✓ Message sent successfully! I'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-sm text-red-500 text-center">
                        ✗ Failed to send message. Please try again or email me directly.
                      </p>
                    )}
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

                      <a
                        href="https://www.instagram.com/kaushalloya_356"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Instagram className="h-5 w-5 text-primary" />
                        </div>
                        <span>instagram.com/kaushalloya_356</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
