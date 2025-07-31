import { useState } from "react"
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Search,
  Filter,
  GraduationCap,
  Star,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <GraduationCap className="h-6 w-6" />
          <h1 className="text-lg font-semibold md:text-2xl">Courses</h1>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full appearance-none bg-background pl-9 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select>
              <SelectTrigger className="ml-auto w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="group cursor-pointer">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <img
                    src={`https://placehold.co/100x100?text=C${i + 1}`}
                    alt="Course"
                    className="rounded-md object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="space-y-1">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Course Title {i + 1}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>12 students</span>
                      <Clock className="h-4 w-4 ml-4" />
                      <span>3h 45m</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Badge variant="secondary">Category</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span>4.8</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
