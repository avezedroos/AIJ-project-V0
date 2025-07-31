import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5"></div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Subscribe to our newsletter for the latest updates and announcements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400 rounded-full px-6"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* College Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AIJ Degree College</h3>
                    <p className="text-blue-200 text-sm">Excellence in Education</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Empowering students with quality education and innovative learning experiences for over 25 years.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-200">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Courses", href: "/courses" },
                    { name: "Admissions", href: "/admission" },
                    { name: "Faculty", href: "#" },
                    { name: "Campus Life", href: "#" },
                    { name: "Alumni", href: "#" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Programs */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-200">Programs</h4>
                <ul className="space-y-3">
                  {[
                    "Bachelor of Computer Applications",
                    "Bachelor of Business Administration",
                    "Bachelor of Commerce",
                    "Master of Computer Applications",
                    "Master of Business Administration",
                    "Bachelor of Arts",
                  ].map((program) => (
                    <li key={program}>
                      <Link
                        to="/courses"
                        className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block text-sm"
                      >
                        {program}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-200">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        123 Education Street,
                        <br />
                        Knowledge City, State - 123456
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-blue-100 text-sm">+91 98765 43210</p>
                      <p className="text-blue-100 text-sm">+91 98765 43211</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-blue-100 text-sm">info@aijdegreecollege.edu.in</p>
                      <p className="text-blue-100 text-sm">admissions@aijdegreecollege.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Logos */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4 text-center">
            <h4 className="text-lg font-bold mb-4 text-blue-200">Accreditations & Affiliations</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: "NAAC A+", logo: "/placeholder.svg" },
                { name: "UGC Approved", logo: "/placeholder.svg" },
                { name: "AICTE", logo: "/placeholder.svg" },
                { name: "University Affiliated", logo: "/placeholder.svg" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    width={120}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AIJ Degree College. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
