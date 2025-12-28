import { SpotlightCard } from "@/components/spotlight-card"

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
            <div className="glass p-8 md:p-12 rounded-2xl space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              I'm a Computer Science & Engineering student with a passion for creating elegant solutions to complex
              problems. My journey in software development is driven by curiosity and a commitment to engineering
              excellence.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              I specialize in building scalable applications and exploring the intersection of software engineering and
              artificial intelligence. Whether it's crafting intuitive user interfaces or architecting robust backend
              systems, I approach every challenge with a problem-solving mindset.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Currently seeking opportunities to contribute to innovative projects and collaborate with talented teams
              pushing the boundaries of technology.
            </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
