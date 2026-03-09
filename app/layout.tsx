import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navigation } from "@/components/navigation"
import { DotGrid } from "@/components/dot-grid"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kaushal Loya",
  description: "Computer Science & Engineering student specializing in scalable software and intelligent systems",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll />
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
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <footer className="relative border-t border-border/50 backdrop-blur-lg bg-card/60 py-8">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Kaushal Loya.</p>
              </div>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
