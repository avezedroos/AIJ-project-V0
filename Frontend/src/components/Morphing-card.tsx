import { useState, type ReactNode } from "react"
import { Card } from "./ui/card"

interface MorphingCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
}

export function MorphingCard({
  children,
  className = "",
  hoverScale = 1.05,
  hoverRotate = 2,
}: MorphingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (centerX - e.clientX) / 10

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={`transition-all duration-500 ease-out transform-gpu ${className}`}
        style={{
          transform: `scale(${isHovered ? hoverScale : 1}) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) rotateZ(${isHovered ? hoverRotate : 0}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </Card>
    </div>
  )
}
