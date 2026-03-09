"use client"

import { SpotlightCard } from "@/components/spotlight-card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
      { name: "C", icon: "c" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Vite", icon: "vite" },
      { name: "React Native", icon: "react" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
]

interface SkillsSectionProps {
  compact?: boolean
  hideHeader?: boolean
}

export function SkillsSection({ compact = false, hideHeader = false }: SkillsSectionProps) {
  const content = (
    <div className={`space-y-12 ${compact ? "" : "glass p-8 md:p-12 rounded-3xl"}`}>
      {!hideHeader && (
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
      )}

      <div className={`${compact ? "space-y-8" : "space-y-12"}`}>
        {skillCategories.map((category, catIdx) => (
          <div key={category.title} className="space-y-4">
            <h3 className={`font-semibold text-muted-foreground/80 pl-2 border-l-2 border-primary/50 ${compact ? "text-lg" : "text-xl"}`}>
              {category.title}
            </h3>

            <div className={`flex flex-wrap ${compact ? "gap-4 justify-start" : "gap-6 md:gap-8 justify-center md:justify-start"}`}>
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group"
                  style={{
                    animation: `fade-in-up 0.5s ease-out forwards ${catIdx * 0.1 + skillIdx * 0.05}s`,
                    opacity: 0
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`relative glass rounded-lg border border-white/10 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 ${compact ? "p-2" : "p-3"}`}>
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className={`${compact ? "w-8 h-8 md:w-10 md:h-10" : "w-12 h-12 md:w-14 md:h-14"} object-contain`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <span className={`${compact ? "text-[8px] md:text-[10px]" : "text-[10px] md:text-xs"} font-bold text-muted-foreground group-hover:text-primary transition-colors tracking-tighter md:tracking-widest uppercase`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  if (compact) {
    return (
      <div className="relative">
        {content}
        <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </div>
    )
  }

  return (
    <section id="skills" className="relative pb-32 pt-4 px-4">
      <div className="container mx-auto max-w-6xl">
        {content}
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
