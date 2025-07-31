import type { ReactNode } from "react"
import React from "react"

import { useScrollAnimation } from "../hooks/use-scroll-animation"

interface ScrollRevealProps {
    children: ReactNode
    direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
    delay?: number
    duration?: number
    className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = "up",
    delay = 0,
    duration = 600,
    className = "",
}) => {
    const { elementRef, isVisible } = useScrollAnimation()

    const getTransform = (): string => {
        if (!isVisible) {
            switch (direction) {
                case "up":
                    return "translateY(60px)"
                case "down":
                    return "translateY(-60px)"
                case "left":
                    return "translateX(60px)"
                case "right":
                    return "translateX(-60px)"
                case "scale":
                    return "scale(0.8)"
                case "fade":
                    return "none"
                default:
                    return "translateY(60px)"
            }
        }
        return "translateY(0) translateX(0) scale(1)"
    }

    const getOpacity = (): number => {
        return isVisible ? 1 : 0
    }

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                transform: getTransform(),
                opacity: getOpacity(),
                transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}

