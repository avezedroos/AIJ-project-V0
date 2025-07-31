
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ThemeProvider } from "@/components/theme-provider"
// import "./index.css" // Tailwind base styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
