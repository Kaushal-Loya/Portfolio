"use client"

import { Timeline } from "@/components/ui/timeline"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
    const educationData = [
        {
            title: "2023 - 2027",
            content: (
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Undergraduation
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                            Amrita Vishwa Vidyapeetham, Coimbatore
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                            B.Tech in Computer Science & Engineering
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "2021 - 2023",
            content: (
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Higher Secondary Education (12th Grade)
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                            Sri Chaitanya Junior College, Hyderabad
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                            Science Stream - Physics, Chemistry, Mathematics
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "2019 - 2021",
            content: (
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Secondary Education (10th Grade)
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                            Lokseva e School, Pune
                        </p>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <section id="education" className="relative py-32 px-4">
            <div className="container mx-auto">
                <div className="glass p-8 md:p-12 rounded-3xl">
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-3">
                                <GraduationCap className="h-8 w-8 text-primary" />
                                <h2 className="text-3xl md:text-5xl font-bold">
                                    Education <span className="text-gradient">Timeline</span>
                                </h2>
                            </div>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                My academic journey and qualifications
                            </p>
                        </div>

                        <div className="relative w-full overflow-clip">
                            <Timeline data={educationData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
