import { SkillsSection } from "@/components/skills-section"

export default function AboutPage() {
    return (
        <section className="relative flex-1 pb-12 pt-8 md:pt-12 px-4 flex flex-col justify-center">
            <div className="container mx-auto max-w-7xl">
                <div className="glass p-8 md:p-12 rounded-3xl space-y-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">
                        Technical <span className="text-gradient">Skills</span>
                    </h1>

                    <SkillsSection compact hideHeader twoColumn />
                </div>
            </div>
        </section>
    )
}
