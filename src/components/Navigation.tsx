import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b border-green-400/20 bg-gray-900/80 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 w-full">
        <span className="text-xl font-bold text-green-400 whitespace-nowrap overflow-hidden text-ellipsis max-w-[70vw] sm:max-w-xs md:max-w-sm lg:max-w-none">
          Portfolio
        </span>
        <div className="hidden sm:flex space-x-4 sm:space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-green-400'
                  : 'text-white hover:text-green-400'
              } whitespace-nowrap px-2`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
