import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  ChevronRight,
  Star,
  Award,
  BookOpen,
  Mic,
} from "lucide-react"

interface NewsEventItem {
  id: number
  title: string
  type: string
  category: string
  date: string
  time?: string
  location?: string
  description: string
  image: string
  featured?: boolean
  attendees?: number
  status: string
}

const newsEvents: NewsEventItem[] = [
  {
    id: 1,
    title: "Annual Tech Fest 2025 - Innovation Summit",
    type: "event",
    category: "Technology",
    date: "2025-03-15",
    time: "09:00 AM",
    location: "Main Auditorium",
    description:
      "Join us for our biggest technology event featuring workshops, competitions, and guest speakers from leading tech companies.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    attendees: 500,
    status: "upcoming",
  },
  {
    id: 2,
    title: "NAAC Accreditation Renewed with A+ Grade",
    type: "news",
    category: "Achievement",
    date: "2025-01-20",
    description:
      "AIJ Degree College has successfully renewed its NAAC accreditation with an A+ grade, reflecting our commitment to quality education.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    status: "published",
  },
  {
    id: 3,
    title: "Guest Lecture: Future of AI in Education",
    type: "event",
    category: "Education",
    date: "2025-04-05",
    time: "11:00 AM",
    location: "Room 204",
    description:
      "Industry expert Dr. Anjali Rao will speak on how AI is transforming teaching and learning in higher education.",
    image: "/placeholder.svg?height=300&width=400",
    status: "upcoming",
    attendees: 200,
  },
  {
    id: 4,
    title: "Inter-college Sports Championship Highlights",
    type: "news",
    category: "Sports",
    date: "2025-02-10",
    description:
      "Our students brought home 10 medals across various sports in the 2025 inter-college sports meet!",
    image: "/placeholder.svg?height=300&width=400",
    status: "published",
  },
]

export default function NewsEventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(newsEvents)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterItems(term, selectedType, selectedCategory)
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    filterItems(searchTerm, type, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterItems(searchTerm, selectedType, category)
  }

  const filterItems = (term: string, type: string, category: string) => {
    let filtered = [...newsEvents]
    if (term) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.description.toLowerCase().includes(term.toLowerCase())
      )
    }
    if (type !== "all") {
      filtered = filtered.filter((item) => item.type === type)
    }
    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category)
    }
    setFilteredItems(filtered)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-indigo-800 dark:text-white">
          News & Events
        </h1>
        <p className="text-sm text-muted-foreground">
          Stay updated with the latest happenings at AIJ Degree College
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex w-full md:w-1/2 items-center gap-2">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search news or events"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Select onValueChange={handleTypeChange} defaultValue="all">
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="news">News</SelectItem>
            <SelectItem value="event">Events</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={handleCategoryChange} defaultValue="all">
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Achievement">Achievement</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{item.category}</Badge>
                {item.featured && (
                  <Star className="w-4 h-4 text-yellow-500" />
                )}
              </div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {item.description}
              </p>
              <div className="text-xs text-muted-foreground mt-2 flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(item.date)}
                </div>
                {item.time && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                )}
                {item.attendees && (
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {item.attendees} Attendees
                  </div>
                )}
              </div>
              <Button variant="link" className="p-0 h-auto text-indigo-600">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
