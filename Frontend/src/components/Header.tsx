import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GraduationCap, Menu, Moon, Sun, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { useTheme } from "@/components/theme-provider" // replace with custom hook or remove if not using next-themes
import MagneticButton from "@/components/MagneticButton"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme() || { theme: "light", setTheme: () => {} }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admission" },
    { name: "News & Events", href: "/news-events" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 text-sm overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 animate-slide-in-left">
            <div className="flex items-center hover:scale-105 transition-transform duration-200">
              <Phone className="h-4 w-4 mr-2 animate-pulse" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center hover:scale-105 transition-transform duration-200">
              <Mail className="h-4 w-4 mr-2 animate-pulse" />
              <span>info@aijdegreecollege.edu.in</span>
            </div>
          </div>
          <div className="hidden md:block animate-slide-in-right">
            <span className="animate-pulse">Admissions Open for 2025 Batch</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 shadow-lg border-b border-white/20 transform scale-[0.98]"
            : "bg-transparent scale-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">AIJ Degree College</h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">Excellence in Education</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <MagneticButton
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
                strength={0.2}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </MagneticButton>

              <MagneticButton
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                strength={0.3}
              >
                Apply Now
              </MagneticButton>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <MagneticButton variant="ghost" size="sm" className="lg:hidden w-9 h-9 rounded-full" strength={0.2}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </MagneticButton>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 backdrop-blur-lg bg-white/95 dark:bg-slate-900/95">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-3 pb-8 border-b border-slate-200 dark:border-slate-700 animate-slide-in-right">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h1 className="text-lg font-bold text-slate-800 dark:text-slate-200">AIJ Degree College</h1>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Excellence in Education</p>
                      </div>
                    </div>

                    <nav className="flex-1 py-8">
                      <div className="space-y-4">
                        {navigation.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:translate-x-2 transform"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </nav>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700 animate-slide-in-up">
                      <MagneticButton
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        strength={0.2}
                      >
                        Apply Now
                      </MagneticButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
