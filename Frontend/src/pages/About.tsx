import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, BookOpen, Target, Eye, Heart, Calendar, Trophy, Star } from "lucide-react"
// import Image from "next/image"
import Image from "@/assets/image_helper.svg"
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-lg">
                            About AIJ Degree College
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 dark:from-blue-100 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                            Excellence in Education
                        </h1>
                        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            For over 25 years, we have been committed to providing world-class education and shaping the leaders of
                            tomorrow
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Our Mission",
                                icon: Target,
                                content:
                                    "To provide quality education that empowers students with knowledge, skills, and values necessary for personal growth and societal contribution.",
                                color: "from-blue-500 to-indigo-600",
                            },
                            {
                                title: "Our Vision",
                                icon: Eye,
                                content:
                                    "To be a leading institution of higher education, recognized globally for academic excellence, innovation, and social responsibility.",
                                color: "from-emerald-500 to-teal-600",
                            },
                            {
                                title: "Our Values",
                                icon: Heart,
                                content:
                                    "Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility guide everything we do in our educational mission.",
                                color: "from-purple-500 to-pink-600",
                            },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className="group backdrop-blur-lg bg-white/20 dark:bg-white/10 border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full"
                            >
                                <CardContent className="p-8 text-center h-full flex flex-col">
                                    <div
                                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <item.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{item.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-100 dark:to-indigo-200 bg-clip-text text-transparent">
                            Our Journey
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A timeline of milestones and achievements that define our legacy
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>

                        <div className="space-y-12">
                            {[
                                {
                                    year: "1995",
                                    title: "Foundation",
                                    description: "AIJ Degree College was established with a vision to provide quality higher education",
                                    side: "left",
                                },
                                {
                                    year: "2000",
                                    title: "First Graduation",
                                    description: "Our first batch of 150 students graduated with flying colors",
                                    side: "right",
                                },
                                {
                                    year: "2005",
                                    title: "Campus Expansion",
                                    description: "Expanded campus facilities with new academic blocks and laboratories",
                                    side: "left",
                                },
                                {
                                    year: "2010",
                                    title: "NAAC Accreditation",
                                    description: "Received NAAC A+ accreditation for excellence in education",
                                    side: "right",
                                },
                                {
                                    year: "2015",
                                    title: "Research Center",
                                    description: "Established dedicated research center for advanced studies",
                                    side: "left",
                                },
                                {
                                    year: "2020",
                                    title: "Digital Transformation",
                                    description: "Implemented comprehensive digital learning infrastructure",
                                    side: "right",
                                },
                                {
                                    year: "2025",
                                    title: "Silver Jubilee",
                                    description: "Celebrating 30 years of educational excellence and innovation",
                                    side: "left",
                                },
                            ].map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}
                                >
                                    <div className={`w-1/2 ${milestone.side === "right" ? "pl-8" : "pr-8"}`}>
                                        <Card className="backdrop-blur-lg bg-white/30 dark:bg-white/10 border-white/40 hover:bg-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                                            <CardContent className="p-6">
                                                <div className="flex items-center mb-3">
                                                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                                        {milestone.year}
                                                    </Badge>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{milestone.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>

                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="backdrop-blur-lg bg-white/30 dark:bg-white/10 border-white/40 shadow-2xl">
                            <CardContent className="p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                    <div className="lg:col-span-1">
                                        <div className="relative">
                                            <img
                                                src={Image}
                                                alt="Principal"
                                                width={300}
                                                height={300}
                                                className="rounded-2xl shadow-lg"
                                            />
                                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                                <Trophy className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="mb-6">
                                            <h3 className="text-3xl font-bold mb-2 text-slate-800 dark:text-slate-200">Dr. Rajesh Gupta</h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">Principal & Director</p>
                                        </div>

                                        <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                                            "At AIJ Degree College, we believe that education is not just about acquiring knowledge, but about
                                            developing the character, creativity, and critical thinking skills that will serve our students
                                            throughout their lives. Our commitment to excellence drives us to continuously innovate and adapt
                                            to the changing needs of our students and society."
                                        </blockquote>

                                        <div className="flex items-center space-x-4">
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 fill-current" />
                                                ))}
                                            </div>
                                            <span className="text-slate-600 dark:text-slate-400">25+ Years in Education</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-100 dark:to-indigo-200 bg-clip-text text-transparent">
                            Our Achievements
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Recognition and accolades that reflect our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "NAAC A+ Grade",
                                description: "Highest accreditation for quality education",
                                color: "from-amber-500 to-orange-600",
                            },
                            {
                                icon: Trophy,
                                title: "Best College Award",
                                description: "State recognition for academic excellence",
                                color: "from-blue-500 to-indigo-600",
                            },
                            {
                                icon: Users,
                                title: "100% Placement",
                                description: "Outstanding career support record",
                                color: "from-emerald-500 to-teal-600",
                            },
                            {
                                icon: BookOpen,
                                title: "Research Excellence",
                                description: "Leading publications and innovations",
                                color: "from-purple-500 to-pink-600",
                            },
                        ].map((achievement, index) => (
                            <Card
                                key={index}
                                className="group backdrop-blur-lg bg-white/20 dark:bg-white/10 border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center"
                            >
                                <CardContent className="p-8">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <achievement.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">{achievement.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Join Our Legacy of Excellence</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Become part of our story and write your own chapter of success
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Admissions
                    </Button>
                </div>
            </section>
        </div>
    )
}
