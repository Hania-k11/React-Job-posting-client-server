import { useState, useEffect } from "react"
import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { Home, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent  py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Home className="h-8 w-8 text-emerald-600 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Asaan Ghar
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Buy", "Sell", "Rent", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Login/Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Login / Register
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Home", "Buy", "Sell", "Rent", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
              Login / Register
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar