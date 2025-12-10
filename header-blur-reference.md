# Header Blur Effect - Referencia de Implementación

## El Efecto que Viste en Until Labs

Ese header con efecto blur/glass que viste en https://www.untillabs.com/ y muchos otros sitios modernos.

## ¿Qué Librería Se Usa?

**¡Ninguna librería especial!** 🎉

Es CSS nativo con `backdrop-filter: blur()`. Este efecto fue popularizado por Apple con el "frosted glass" en iOS/macOS y ahora está soportado por todos los navegadores modernos.

---

## Implementación Completa

### 1. Versión con Tailwind CSS (Recomendada)

```tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-white">
            Tu Nombre
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white/70 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  )
}
```

---

### 2. Versión con CSS Modules (Alternativa)

```tsx
// Navigation.module.css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease-in-out;
}

.transparent {
  background: transparent;
}

.blurred {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

// Navigation.tsx
import styles from './Navigation.module.css'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.blurred : styles.transparent}`}>
      {/* Content */}
    </nav>
  )
}
```

---

### 3. CSS Puro (Sin Framework)

```css
/* styles.css */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav.scrolled {
  /* El efecto mágico */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Para Safari */
  
  /* Background semi-transparente */
  background: rgba(0, 0, 0, 0.7);
  
  /* Sutil borde y sombra */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

---

## Variaciones de Backdrop Blur

### Con Tailwind (Diferentes Intensidades)

```tsx
// Blur ligero (más sutil)
className="backdrop-blur-sm bg-black/60"

// Blur medio (balance perfecto)
className="backdrop-blur-md bg-black/70"

// Blur fuerte (más privacidad)
className="backdrop-blur-lg bg-black/80"

// Blur extra fuerte
className="backdrop-blur-xl bg-black/90"
```

### Con CSS (Control Total)

```css
/* Blur personalizado */
backdrop-filter: blur(8px);   /* Sutil */
backdrop-filter: blur(12px);  /* Medio - Recomendado */
backdrop-filter: blur(16px);  /* Fuerte */
backdrop-filter: blur(24px);  /* Extra */

/* Combinado con saturación (efecto iOS) */
backdrop-filter: blur(12px) saturate(180%);
```

---

## Ejemplos de Sitios Famosos

### Apple Style (Blur + Saturación)
```css
backdrop-filter: blur(20px) saturate(180%);
background: rgba(255, 255, 255, 0.72);
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
```

### Until Labs Style (Dark Blur)
```css
backdrop-filter: blur(12px);
background: rgba(0, 0, 0, 0.7);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
```

### Vercel Style (Light Blur)
```css
backdrop-filter: blur(8px);
background: rgba(255, 255, 255, 0.8);
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
```

### Linear Style (Minimal)
```css
backdrop-filter: blur(16px);
background: rgba(17, 17, 17, 0.8);
border-bottom: 1px solid rgba(255, 255, 255, 0.05);
```

---

## Tips y Mejores Prácticas

### 1. Performance
```tsx
// ✅ BUENO: Usar CSS transitions
className="transition-all duration-300"

// ❌ MALO: Cambiar blur en cada frame
// backdrop-filter es "expensive" en animaciones
```

### 2. Safari Support
```css
/* Siempre incluir prefijo para Safari */
.nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### 3. Fallback para Navegadores Viejos
```css
/* Si backdrop-filter no está soportado, usar background opaco */
@supports not (backdrop-filter: blur(12px)) {
  .nav.scrolled {
    background: rgba(0, 0, 0, 0.95);
  }
}
```

### 4. Optimización de Scroll
```tsx
// Usar throttle para mejor performance
import { throttle } from 'lodash'

useEffect(() => {
  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY > 50)
  }, 100)

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

---

## Animaciones Adicionales

### Fade In Logo al Scrollear
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: isScrolled ? 1 : 0 }}
  transition={{ duration: 0.3 }}
>
  <Logo />
</motion.div>
```

### Height Change (Efecto Until Labs - Se Contrae al Scrollear)
```tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        ${isScrolled 
          ? 'backdrop-blur-md bg-black/70 border-b border-white/10' 
          : 'bg-transparent'
        }
      `}
      animate={{ 
        height: isScrolled ? '64px' : '80px',
        paddingTop: isScrolled ? '0' : '8px',
        paddingBottom: isScrolled ? '0' : '8px'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Siempre visible */}
          <motion.div
            animate={{ 
              fontSize: isScrolled ? '18px' : '24px' 
            }}
            transition={{ duration: 0.3 }}
            className="font-semibold text-white"
          >
            Tu Logo
          </motion.div>

          {/* Links - Se ocultan cuando se scrollea (opcional) */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
              </motion.div>
            )}
          </AnimatePresence>

          {/* O mantener links visibles pero más pequeños */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            animate={{ 
              fontSize: isScrolled ? '14px' : '16px',
              gap: isScrolled ? '24px' : '32px'
            }}
            transition={{ duration: 0.3 }}
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            animate={{
              scale: isScrolled ? 0.9 : 1,
              paddingLeft: isScrolled ? '20px' : '24px',
              paddingRight: isScrolled ? '20px' : '24px',
              paddingTop: isScrolled ? '8px' : '10px',
              paddingBottom: isScrolled ? '8px' : '10px'
            }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black rounded-full font-medium hover:bg-white/90"
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
```

### Slide Down on Scroll Up, Hide on Scroll Down
```tsx
const [prevScrollY, setPrevScrollY] = useState(0)
const [visible, setVisible] = useState(true)

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY < prevScrollY) {
      setVisible(true) // Scrolling up
    } else if (currentScrollY > 100 && currentScrollY > prevScrollY) {
      setVisible(false) // Scrolling down
    }
    
    setPrevScrollY(currentScrollY)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [prevScrollY])

return (
  <motion.nav
    animate={{ y: visible ? 0 : -100 }}
    transition={{ duration: 0.3 }}
  >
```

---

## Tailwind Config (Opcional)

Si quieres customizar los valores de blur:

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        '3xl': '32px',
        '4xl': '48px',
      }
    }
  }
}
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ 76+ |
| Safari | ✅ 9+ (con -webkit-) |
| Firefox | ✅ 103+ |
| Edge | ✅ 79+ |
| Opera | ✅ 63+ |

**Cobertura global: ~95%** ✅

---

---

## Color Adaptativo Según Fondo (Until Labs Effect)

El header cambia de color automáticamente dependiendo del fondo de la sección debajo.

### Implementación Completa

```tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Define los temas por sección
const sectionThemes = {
  hero: {
    navBg: 'rgba(0, 0, 0, 0.3)',
    textColor: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-black',
    borderColor: 'border-white/10'
  },
  about: {
    navBg: 'rgba(255, 255, 255, 0.7)',
    textColor: 'text-black',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    borderColor: 'border-black/10'
  },
  projects: {
    navBg: 'rgba(0, 0, 0, 0.7)',
    textColor: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-black',
    borderColor: 'border-white/10'
  },
  // Agregar más secciones...
}

export function AdaptiveNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Detectar qué sección está visible
    const sections = document.querySelectorAll('section[data-nav-theme]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top < 100) {
            const theme = entry.target.getAttribute('data-nav-theme')
            if (theme) setCurrentSection(theme)
          }
        })
      },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const theme = sectionThemes[currentSection] || sectionThemes.hero

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled ? `backdrop-blur-md border-b ${theme.borderColor}` : 'bg-transparent'}
        ${theme.textColor}
      `}
      style={{
        backgroundColor: isScrolled ? theme.navBg : 'transparent'
      }}
      animate={{ 
        height: isScrolled ? '64px' : '80px' 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            animate={{ fontSize: isScrolled ? '18px' : '24px' }}
            className="font-semibold"
          >
            Logo
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
          </div>

          {/* CTA Button - Cambia de color según tema */}
          <motion.button
            className={`
              px-6 py-2 rounded-full font-medium
              transition-colors duration-500
              ${theme.buttonBg} ${theme.buttonText}
              hover:opacity-90
            `}
            animate={{ scale: isScrolled ? 0.9 : 1 }}
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
```

### En tus Secciones HTML

```tsx
// pages/index.tsx o app/page.tsx

export default function Home() {
  return (
    <>
      <AdaptiveNavigation />
      
      {/* Hero - Fondo oscuro, nav claro */}
      <section 
        data-nav-theme="hero" 
        className="min-h-screen bg-gradient-to-br from-gray-900 to-black"
      >
        <Hero />
      </section>

      {/* About - Fondo claro, nav oscuro */}
      <section 
        data-nav-theme="about" 
        className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100"
      >
        <About />
      </section>

      {/* Projects - Fondo oscuro, nav claro */}
      <section 
        data-nav-theme="projects" 
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <Projects />
      </section>

      {/* Contact - Fondo claro, nav oscuro */}
      <section 
        data-nav-theme="about"  // Reusar tema claro
        className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100"
      >
        <Contact />
      </section>
    </>
  )
}
```

### Versión Simplificada (Auto-detect Light/Dark)

Si no quieres definir temas manualmente, puedes auto-detectar:

```tsx
'use client'

import { useState, useEffect } from 'react'

export function SmartNavigation() {
  const [isDarkBackground, setIsDarkBackground] = useState(true)

  useEffect(() => {
    const detectBackgroundColor = () => {
      // Obtener elemento debajo del nav
      const elements = document.elementsFromPoint(
        window.innerWidth / 2,
        100 // Posición Y del nav
      )
      
      const section = elements.find(el => el.tagName === 'SECTION')
      if (!section) return

      // Obtener color de fondo
      const bgColor = window.getComputedStyle(section).backgroundColor
      
      // Convertir a luminosidad
      const rgb = bgColor.match(/\d+/g)
      if (rgb) {
        const [r, g, b] = rgb.map(Number)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        setIsDarkBackground(luminance < 0.5)
      }
    }

    window.addEventListener('scroll', detectBackgroundColor)
    detectBackgroundColor() // Check inicial
    
    return () => window.removeEventListener('scroll', detectBackgroundColor)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-500
        ${isDarkBackground 
          ? 'bg-black/70 text-white border-white/10' 
          : 'bg-white/70 text-black border-black/10'
        }
        border-b
      `}
    >
      {/* Content */}
      <button
        className={`
          px-6 py-2 rounded-full transition-all duration-500
          ${isDarkBackground 
            ? 'bg-white text-black' 
            : 'bg-black text-white'
          }
        `}
      >
        Join Us
      </button>
    </nav>
  )
}
```

### Custom Hook para Reusar

```tsx
// hooks/useNavTheme.ts
import { useState, useEffect } from 'react'

export function useNavTheme() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-nav-theme]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top < 100) {
            const theme = entry.target.getAttribute('data-nav-theme')
            if (theme) setCurrentTheme(theme)
          }
        })
      },
      { 
        threshold: 0, 
        rootMargin: '-100px 0px 0px 0px' 
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return currentTheme
}

// Uso:
export function Navigation() {
  const theme = useNavTheme()
  
  return (
    <nav className={theme === 'dark' ? 'text-white' : 'text-black'}>
      {/* Content */}
    </nav>
  )
}
```

---

## Resumen - Efectos Until Labs

El header de Until Labs combina 3 efectos principales:

### 1. **Blur Effect** (CSS Nativo)
```css
backdrop-filter: blur(12px);
background: rgba(0, 0, 0, 0.7);
```

### 2. **Contracción al Scrollear** (Framer Motion)
```tsx
animate={{ height: isScrolled ? '64px' : '80px' }}
```

### 3. **Color Adaptativo** (Intersection Observer)
```tsx
// Detecta sección visible y cambia tema del nav
useEffect(() => {
  const observer = new IntersectionObserver(...)
  sections.forEach(section => observer.observe(section))
}, [])
```

### Todo Junto:
- ✅ **CSS nativo** - Sin librerías especiales
- ✅ **Ampliamente soportado** - Funciona en navegadores modernos
- ✅ **Performante** - Usa observers nativos del browser
- ✅ **Smooth** - Transiciones CSS + Framer Motion

¡Listo para implementar! 🚀

