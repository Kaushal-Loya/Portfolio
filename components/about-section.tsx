import { SpotlightCard } from "@/components/spotlight-card"

interface AboutSectionProps {
  compact?: boolean
  hideHeader?: boolean
}

export function AboutSection({ compact = false, hideHeader = false }: AboutSectionProps) {
  const content = (
    <div className={`space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ${compact ? "" : "container mx-auto max-w-4xl"}`}>
      {!hideHeader && (
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          About <span className="text-gradient">Me</span>
        </h2>
      )}

      <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
        <div className={`glass rounded-2xl space-y-6 ${compact ? "p-6" : "p-8 md:p-12"}`}>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            I'm a Computer Science & Engineering student who enjoys solving problems and building software that is simple, clean,
            and useful. I like understanding how things work and turning ideas into working solutions through code.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            I mainly work on building scalable applications and exploring how software and artificial intelligence come together.
            Whether it's designing a user-friendly interface or writing reliable backend logic, I enjoy the entire development
            process.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            I'm currently looking for opportunities to learn, collaborate with motivated teams, and contribute to projects that
            create real-world impact.
          </p>
        </div>
      </SpotlightCard>
    </div>
  )

  if (compact) return content

  return (
    <section id="about" className="relative pb-8 pt-8 px-4">
      {content}
    </section>
  )
}
