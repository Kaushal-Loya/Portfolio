import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"

export default function AboutPage() {
    return (
        <section className="relative pb-32 pt-12 md:pt-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="glass p-8 md:p-12 rounded-3xl space-y-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">
                        About <span className="text-gradient">Me</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left: Bio (2/5) */}
                        <div className="lg:col-span-2">
                            <AboutSection compact hideHeader />
                        </div>

                        {/* Right: Skills (3/5) */}
                        <div className="lg:col-span-3">
                            <SkillsSection compact hideHeader />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
