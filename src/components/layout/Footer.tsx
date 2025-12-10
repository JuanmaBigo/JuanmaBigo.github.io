'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
          </p>
          
          <nav className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}



