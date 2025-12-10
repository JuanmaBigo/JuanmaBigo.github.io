'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
]

export function Contact() {
  return (
    <section 
      id="contact" 
      data-nav-theme="contact"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Trabajemos juntos
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Estoy disponible para proyectos freelance, colaboraciones y oportunidades full-time. ¡Charlemos!
          </p>
          
          <motion.a
            href="mailto:tu@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
            tu@email.com
          </motion.a>
          
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


