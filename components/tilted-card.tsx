"use client"

import { useRef, useState } from "react"

interface TiltedCardProps {
    children: React.ReactNode
    className?: string
    containerHeight?: string
    containerWidth?: string
    rotateAmplitude?: number
    scaleOnHover?: number
    showTooltip?: boolean
}

export function TiltedCard({
    children,
    className = "",
    containerHeight = "auto",
    containerWidth = "auto",
    rotateAmplitude = 10,
    scaleOnHover = 1.02,
    showTooltip = false
}: TiltedCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [transform, setTransform] = useState("")

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -rotateAmplitude
        const rotateY = ((x - centerX) / centerX) * rotateAmplitude

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`
        )
    }

    const handleMouseLeave = () => {
        setTransform("")
    }

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-300 ease-out ${className}`}
            style={{
                transform,
                height: containerHeight,
                width: containerWidth
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}
