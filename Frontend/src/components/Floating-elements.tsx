import React, { useEffect, useState } from "react"
import { useMousePosition, useParallax } from "../hooks/use-scroll-animation"

export function FloatingElements() {
  const mousePosition = useMousePosition()
  const parallaxOffset = useParallax(0.3)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const elements = [
    {
      id: 1,
      size: "w-20 h-20",
      color: "bg-gradient-to-br from-blue-400/20 to-indigo-500/20",
      initialX: 10,
      initialY: 20,
      speed: 0.02,
    },
    {
      id: 2,
      size: "w-32 h-32",
      color: "bg-gradient-to-br from-emerald-400/15 to-teal-500/15",
      initialX: 85,
      initialY: 60,
      speed: 0.015,
    },
    {
      id: 3,
      size: "w-16 h-16",
      color: "bg-gradient-to-br from-amber-400/25 to-orange-500/25",
      initialX: 70,
      initialY: 30,
      speed: 0.025,
    },
    {
      id: 4,
      size: "w-24 h-24",
      color: "bg-gradient-to-br from-purple-400/20 to-pink-500/20",
      initialX: 15,
      initialY: 70,
      speed: 0.018,
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full blur-sm animate-pulse`}
          style={{
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
            transform: `translate(${mousePosition.x * element.speed}px, ${
              mousePosition.y * element.speed + parallaxOffset
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  )
}
