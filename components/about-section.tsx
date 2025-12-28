import { SpotlightCard } from "@/components/spotlight-card"

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              About <span className="text-gradient">Me</span>
            </h2>

            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.25)">
              <div className="glass p-8 md:p-12 rounded-2xl space-y-6">
<p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
  I'm a Computer Science & Engineering student who enjoys solving problems and building software that is simple, clean,
  and useful. I like understanding how things work and turning ideas into working solutions through code.
</p>

<p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
  I mainly work on building scalable applications and exploring how software and artificial intelligence come together.
  Whether it's designing a user-friendly interface or writing reliable backend logic, I enjoy the entire development
  process.
</p>

<p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
  I'm currently looking for opportunities to learn, collaborate with motivated teams, and contribute to projects that
  create real-world impact.
</p>

              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}
