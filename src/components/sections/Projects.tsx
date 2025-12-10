'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Una aplicación web moderna construida con Next.js y TypeScript',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Dashboard interactivo con visualización de datos en tiempo real',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'E-commerce platform con integración de pagos y gestión de inventario',
    tags: ['React', 'Stripe', 'MongoDB'],
    image: '/api/placeholder/400/300'
  }
]

export function Projects() {
  return (
    <section 
      id="projects" 
      data-nav-theme="projects"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-32 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/50">
                {project.title}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                    <ExternalLink size={18} />
                    <span>Ver proyecto</span>
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                    <Github size={18} />
                    <span>Código</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


