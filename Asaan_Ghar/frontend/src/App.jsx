"use client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
