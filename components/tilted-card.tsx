"use client"

import { useRef, useState } from "react"

interface TiltedCardProps {
  imageSrc?: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  rotateAmplitude?: number
  scaleOnHover?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  displayOverlayContent?: boolean
  overlayContent?: React.ReactNode
  children?: React.ReactNode
}

export function TiltedCard({
  imageSrc,
  altText = "",
  captionText = "",
  containerHeight = "auto",
  containerWidth = "100%",
  imageHeight,
  imageWidth,
  rotateAmplitude = 15,
  scaleOnHover = 1.1,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
  children,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateY = ((mouseX - centerX) / centerX) * rotateAmplitude
    const rotateX = ((centerY - mouseY) / centerY) * rotateAmplitude

    setRotation({ x: rotateX, y: rotateY })
    setScale(scaleOnHover)
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setScale(1)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "1000px",
        transition: "transform 0.1s ease-out",
      }}
      className="relative"
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
        }}
        className="w-full h-full"
      >
        {imageSrc ? (
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={altText}
              height={imageHeight}
              width={imageWidth}
              className="w-full h-full object-cover"
            />
            {displayOverlayContent && overlayContent && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {overlayContent}
              </div>
            )}
            {captionText && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">{captionText}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full">{children}</div>
        )}
      </div>

      {showTooltip && isHovering && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
          {captionText || "Hover to tilt"}
        </div>
      )}
    </div>
  )
}
