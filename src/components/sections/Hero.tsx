'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section 
      id="hero" 
      data-nav-theme="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Construyo experiencias
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              digitales excepcionales
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Desarrollador full stack apasionado por crear productos digitales que combinan diseño excepcional con código limpio y performance.
          </motion.p>
          
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
      >
        <ArrowDown className="text-white/50" size={32} />
      </motion.div>
    </section>
  )
}


