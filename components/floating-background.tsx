"use client"

export function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
