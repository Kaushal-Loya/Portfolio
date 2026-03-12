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
            I'm a Computer Science & Engineering student who enjoys solving problems and building simple, clean, and useful software. I like understanding how systems work and turning ideas into practical solutions through code, with a focus on scalable applications and the intersection of software and artificial intelligence. I'm currently seeking opportunities to learn, collaborate with motivated teams, and contribute to projects that create real-world impact.
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
