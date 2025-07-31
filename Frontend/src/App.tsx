import { Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import CoursesPage from "./pages/Courses"
import AdmissionPage from "./pages/Admission"
import NewsEventsPage from "./pages/NewsEvents"
import ContactPage from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="news-events" element={<NewsEventsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
