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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            A showcase of projects that combine technical excellence with thoughtful design.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <motion.div 
                  className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-light">
                      {project.title}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <motion.span 
                      className="text-sm font-medium text-gray-500 tracking-wider uppercase"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Project {String(index + 1).padStart(2, '0')}
                    </motion.span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-4 py-2 border border-white/20 rounded-full text-sm text-gray-300 font-light hover:border-white hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all group/btn text-sm whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">View Project</span>
                      <span className="sm:hidden">View</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white rounded-full font-medium hover:border-white hover:bg-white/10 transition-all group/btn text-sm whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">Source Code</span>
                      <span className="sm:hidden">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


