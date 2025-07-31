// Import necessary React hooks and types
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Define allowed theme values
export type Theme = "light" | "dark" | "system"

// Define the props that ThemeProvider can accept
interface ThemeProviderProps {
  children: ReactNode              // JSX content to wrap (usually your whole app)
  defaultTheme?: Theme            // Optional: default theme if not stored in localStorage
  storageKey?: string             // Optional: key to use in localStorage
}

// Define the shape of the context object that will be provided
interface ThemeContextType {
  theme: Theme                    // Current theme value: "light" | "dark" | "system"
  setTheme: (theme: Theme) => void // Function to update the theme
}

// Create the context with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",           // default theme fallback if nothing stored
  storageKey = "vite-ui-theme",      // localStorage key to persist theme
}: ThemeProviderProps) {
  console.log("ThemeProvider is running")

  // Initialize theme state:
  // 1. Try to load it from localStorage (if available)
  // 2. Otherwise use system preference if defaultTheme is "system"
  // 3. Or fallback to defaultTheme ("light" or "dark")
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null
      if (storedTheme) return storedTheme
    }

    // If user prefers system theme, detect system mode using media query
    if (defaultTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    // Else fallback to given defaultTheme
    return defaultTheme
  })

  // This function updates:
  // 1. The local state
  // 2. Saves new theme to localStorage
  const setTheme = (newTheme: Theme) => {
    console.log(`Setting theme to: ${newTheme}`)
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
  }

  // Whenever the theme changes, update the <html> tag's class (for Tailwind)
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark") // remove old class before applying new one

    // Determine which theme to apply based on state
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme

    // Add the theme class to <html> (Tailwind will style based on this)
    root.classList.add(appliedTheme)
  }, [theme]) // Runs every time `theme` state changes

  // Make theme state and updater function available to children via context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// This custom hook is used in any component to access theme state or toggle it
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
