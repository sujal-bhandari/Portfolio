import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ui/ThemeToggle'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }, [])

  return (
    <AnimatePresence>
      <div className="bg-primary min-h-screen">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
        
        <Footer />
        <ThemeToggle />
      </div>
    </AnimatePresence>
  )
}

export default App
