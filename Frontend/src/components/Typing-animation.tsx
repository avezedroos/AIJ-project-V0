import React, { useEffect, useState } from "react"
import type { RefObject } from "react"

import { useScrollAnimation } from "../hooks/use-scroll-animation"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  className = "",
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursorState, setShowCursorState] = useState(true)
  const { elementRef, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isVisible])

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursorState((prev) => !prev)
      }, 500)

      return () => clearInterval(cursorInterval)
    }
  }, [showCursor])

  return (
    <span ref={elementRef as RefObject<HTMLSpanElement>} className={className}>
      {displayText}
      {showCursor && (
        <span className={`${showCursorState ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
          |
        </span>
      )}
    </span>
  )
}

export default TypingAnimation
