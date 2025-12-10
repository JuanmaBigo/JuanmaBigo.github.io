/**
 * Navigation Component - Estilo Until Labs
 * 
 * Características implementadas:
 * 1. ✅ Backdrop blur effect (CSS nativo)
 * 2. ✅ Se contrae al scrollear (80px → 64px)
 * 3. ✅ Color adaptativo según fondo de sección
 * 4. ✅ Logo y elementos con scale animations
 * 5. ✅ Smooth transitions
 * 6. ✅ Mobile responsive con hamburger menu
 * 
 * Dependencias: framer-motion, lucide-react
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

// Definir temas para cada sección
const sectionThemes = {
  hero: {
    navBg: 'rgba(0, 0, 0, 0.7)',
    textColor: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-black',
    borderColor: 'border-white/10',
    hoverColor: 'hover:text-white/70'
  },
  about: {
    navBg: 'rgba(255, 255, 255, 0.8)',
    textColor: 'text-black',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    borderColor: 'border-black/10',
    hoverColor: 'hover:text-black/70'
  },
  projects: {
    navBg: 'rgba(0, 0, 0, 0.7)',
    textColor: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-black',
    borderColor: 'border-white/10',
    hoverColor: 'hover:text-white/70'
  },
  skills: {
    navBg: 'rgba(255, 255, 255, 0.8)',
    textColor: 'text-black',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    borderColor: 'border-black/10',
    hoverColor: 'hover:text-black/70'
  },
  contact: {
    navBg: 'rgba(0, 0, 0, 0.7)',
    textColor: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-black',
    borderColor: 'border-white/10',
    hoverColor: 'hover:text-white/70'
  }
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState<keyof typeof sectionThemes>('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar sección visible (color adaptativo)
  useEffect(() => {
    const sections = document.querySelectorAll('section[data-nav-theme]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Solo actualizar si la sección está en la parte superior del viewport
          if (entry.isIntersecting && entry.boundingClientRect.top < 100) {
            const theme = entry.target.getAttribute('data-nav-theme') as keyof typeof sectionThemes
            if (theme && sectionThemes[theme]) {
              setCurrentSection(theme)
            }
          }
        })
      },
      { 
        threshold: 0, 
        rootMargin: '-80px 0px 0px 0px' // Offset por la altura del nav
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Cerrar mobile menu al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  const theme = sectionThemes[currentSection]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offsetTop = element.offsetTop - 80 // Offset por nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${isScrolled ? `backdrop-blur-md border-b ${theme.borderColor}` : 'backdrop-blur-sm'}
          ${theme.textColor}
        `}
        style={{
          backgroundColor: isScrolled ? theme.navBg : 'rgba(0, 0, 0, 0.1)'
        }}
        animate={{ 
          height: isScrolled ? '64px' : '80px' 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              animate={{ 
                fontSize: isScrolled ? '20px' : '28px',
                fontWeight: isScrolled ? 600 : 700
              }}
              transition={{ duration: 0.3 }}
              className="font-bold tracking-tight cursor-pointer"
            >
              Portfolio
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-1"
              animate={{ 
                gap: isScrolled ? '8px' : '16px'
              }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`
                    px-4 py-2 rounded-lg transition-all duration-200
                    ${theme.hoverColor}
                  `}
                  animate={{ 
                    fontSize: isScrolled ? '14px' : '16px'
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`
                hidden md:block
                px-6 py-2 rounded-full font-medium
                transition-all duration-500
                ${theme.buttonBg} ${theme.buttonText}
                hover:opacity-90 hover:scale-105
              `}
              animate={{
                scale: isScrolled ? 0.9 : 1,
                paddingLeft: isScrolled ? '20px' : '24px',
                paddingRight: isScrolled ? '20px' : '24px',
                paddingTop: isScrolled ? '8px' : '10px',
                paddingBottom: isScrolled ? '8px' : '10px',
                fontSize: isScrolled ? '14px' : '16px'
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: isScrolled ? 0.95 : 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Let's Talk
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`
              fixed inset-0 z-40 md:hidden
              backdrop-blur-xl
              ${theme.textColor}
            `}
            style={{
              backgroundColor: theme.navBg,
              paddingTop: isScrolled ? '64px' : '80px'
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-3xl font-semibold hover:opacity-70 transition-opacity"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className={`
                    mt-8 px-8 py-4 rounded-full text-center font-semibold text-lg
                    ${theme.buttonBg} ${theme.buttonText}
                    hover:opacity-90 transition-opacity
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  Let's Talk
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * USO EN TU PÁGINA:
 * 
 * Agrega data-nav-theme a cada sección para color adaptativo:
 * 
 * <Navigation />
 * 
 * <section id="hero" data-nav-theme="hero" className="min-h-screen bg-black">
 *   <Hero />
 * </section>
 * 
 * <section id="about" data-nav-theme="about" className="min-h-screen bg-white">
 *   <About />
 * </section>
 * 
 * <section id="projects" data-nav-theme="projects" className="min-h-screen bg-slate-900">
 *   <Projects />
 * </section>
 * 
 * <section id="skills" data-nav-theme="skills" className="min-h-screen bg-gray-100">
 *   <Skills />
 * </section>
 * 
 * <section id="contact" data-nav-theme="contact" className="min-h-screen bg-black">
 *   <Contact />
 * </section>
 */

/**
 * CUSTOMIZACIÓN:
 * 
 * 1. Cambiar colores en sectionThemes
 * 2. Ajustar heights (80px → 64px) según tu diseño
 * 3. Modificar timing de transiciones (duration: 0.3)
 * 4. Agregar/quitar links en navLinks array
 * 5. Cambiar logo text por <Image> si prefieres
 */

/**
 * PERFORMANCE TIPS:
 * 
 * 1. ✅ Usa { passive: true } en scroll listeners
 * 2. ✅ Intersection Observer es nativo y performante
 * 3. ✅ CSS transitions son más rápidas que JS animations
 * 4. ✅ backdrop-filter es GPU-accelerated
 * 5. ⚠️ Evita cambiar blur value en cada scroll frame
 */

export default Navigation




