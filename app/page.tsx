import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { DotGrid } from "@/components/dot-grid"
import { Navigation } from "@/components/navigation"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="relative min-h-screen overflow-hidden pt-24">
        <div className="fixed inset-0 -z-50 h-screen w-screen">
          <DotGrid
            dotSize={6}
            gap={20}
            baseColorLight="#e8e8ea"
            baseColorDark="#2d3748"
            activeColor="#06b6d4"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
          <footer className="relative border-t border-border/50 backdrop-blur-lg bg-card/60 py-8">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Kaushal Loya.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
