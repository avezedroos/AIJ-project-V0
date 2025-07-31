import type { ReactNode } from "react"
import React from "react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

interface StaggeredAnimationProps {
  children: ReactNode[] | ReactNode
  staggerDelay?: number
  className?: string
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 100,
  className = "",
}) => {
  const { elementRef, isVisible } = useScrollAnimation()

  // Ensure children is always treated as an array
  const childArray = React.Children.toArray(children)

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            opacity: isVisible ? 1 : 0,
            transition: `all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
