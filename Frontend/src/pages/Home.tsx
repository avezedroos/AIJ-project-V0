import { CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { GraduationCap, Users, Award, BookOpen, Calendar, MapPin, Phone, Star, Play, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ScrollReveal } from "../components/ScrollReveal"
import { AnimatedCounter } from "../components/animated-counter"
import { StaggeredAnimation } from "../components/Staggered-animation"
import  MagneticButton  from "../components/MagneticButton"
import { MorphingCard } from "../components/Morphing-card"
import { ParallaxSection } from "../components/Parallax-section"
import  TypingAnimation  from "../components/Typing-animation"
import { FloatingElements } from "../components/Floating-elements"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <ParallaxSection
          speed={0.2}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </ParallaxSection>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-8">
            {/* Glass Card Container */}
            <ScrollReveal direction="scale" delay={200}>
              <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl">
                <ScrollReveal direction="up" delay={400}>
                  <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-lg animate-pulse">
                    Excellence in Education Since 1995
                  </Badge>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={600}>
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 dark:from-blue-100 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                    <TypingAnimation text="AIJ Degree College" speed={100} />
                  </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={800}>
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Shaping Tomorrow's Leaders Through Innovation, Excellence, and Academic Distinction
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={1000}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <MagneticButton
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      strength={0.2}
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Apply Now
                    </MagneticButton>
                    <MagneticButton
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/20 transition-all duration-300"
                      strength={0.2}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Virtual Tour
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Stats Cards */}
            <StaggeredAnimation staggerDelay={150} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Users, label: "Students", value: 5000, suffix: "+" },
                { icon: BookOpen, label: "Courses", value: 50, suffix: "+" },
                { icon: Award, label: "Awards", value: 25, suffix: "+" },
                { icon: GraduationCap, label: "Alumni", value: 15000, suffix: "+" },
              ].map((stat, index) => (
                <MorphingCard
                  key={index}
                  className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border-white/30 hover:bg-white/30 transition-all duration-300 hover:shadow-xl"
                  hoverScale={1.08}
                  hoverRotate={1}
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:scale-110" />
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </CardContent>
                </MorphingCard>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-100 dark:to-indigo-200 bg-clip-text text-transparent">
              Explore Our Campus
            </h2>
          </ScrollReveal>

          <StaggeredAnimation staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Programs",
                description: "Discover our comprehensive range of undergraduate and postgraduate courses",
                icon: BookOpen,
                href: "/courses",
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "About College",
                description: "Learn about our rich history, mission, and commitment to excellence",
                icon: Award,
                href: "/about",
                color: "from-emerald-500 to-teal-600",
              },
              {
                title: "Campus Facilities",
                description: "Explore our state-of-the-art infrastructure and modern amenities",
                icon: MapPin,
                href: "/facilities",
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "News & Events",
                description: "Stay updated with latest announcements and upcoming events",
                icon: Calendar,
                href: "/news-events",
                color: "from-amber-500 to-orange-600",
              },
              {
                title: "Admissions",
                description: "Start your journey with us through our streamlined admission process",
                icon: GraduationCap,
                href: "/admission",
                color: "from-rose-500 to-red-600",
              },
              {
                title: "Contact Us",
                description: "Get in touch with our admissions team and support staff",
                icon: Phone,
                href: "/contact",
                color: "from-cyan-500 to-blue-600",
              },
            ].map((item, index) => (
              <Link key={index} to={item.href}>
                <MorphingCard className="group backdrop-blur-lg bg-white/20 dark:bg-white/10 border-white/30 hover:bg-white/30 transition-all duration-500 cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </MorphingCard>
              </Link>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 dark:from-blue-900/20 dark:to-indigo-900/20 relative">
        <ParallaxSection speed={0.1}>
          <div className="container mx-auto px-4">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-100 dark:to-indigo-200 bg-clip-text text-transparent">
                  Success Stories
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Celebrating the achievements of our distinguished alumni and current students
                </p>
              </div>
            </ScrollReveal>

            <StaggeredAnimation staggerDelay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Priya Sharma",
                  achievement: "Chief Medical Officer at Apollo Hospitals",
                  year: "Class of 2015",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Rajesh Kumar",
                  achievement: "Software Engineer at Google",
                  year: "Class of 2018",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Anita Patel",
                  achievement: "Entrepreneur & CEO of TechStart",
                  year: "Class of 2016",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((story, index) => (
                <MorphingCard
                  key={index}
                  className="group backdrop-blur-lg bg-white/30 dark:bg-white/10 border-white/40 hover:bg-white/40 transition-all duration-500"
                  hoverScale={1.05}
                  hoverRotate={1}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-[120px] h-[120px] rounded-full mx-auto border-4 border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{story.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{story.achievement}</p>
                    <p className="text-slate-600 dark:text-slate-400">{story.year}</p>
                  </CardContent>
                </MorphingCard>
              ))}
            </StaggeredAnimation>
          </div>
        </ParallaxSection>
      </section>

      {/* Academic Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-100 dark:to-indigo-200 bg-clip-text text-transparent">
                Academic Excellence
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Recognized for our commitment to quality education and research
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <StaggeredAnimation staggerDelay={150} className="space-y-8">
              {[
                {
                  title: "NAAC A+ Accreditation",
                  description: "Recognized for excellence in teaching, learning, and research",
                  icon: Award,
                },
                {
                  title: "100% Placement Record",
                  description: "Outstanding career support and industry partnerships",
                  icon: Users,
                },
                {
                  title: "Research Excellence",
                  description: "Leading research initiatives and publications",
                  icon: BookOpen,
                },
                {
                  title: "Modern Infrastructure",
                  description: "State-of-the-art facilities and technology integration",
                  icon: MapPin,
                },
              ].map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>

            <ScrollReveal direction="right" delay={400}>
              <div className="relative">
                <MorphingCard className="backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Campus View"
                    className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
                </MorphingCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
       <ParallaxSection
  speed={0.3}
  className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"
>
  {/* Empty children or fallback content */}
  <></>
</ParallaxSection>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their careers at AIJ Degree College
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                strength={0.3}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Application
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
                strength={0.3}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Visit
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
