'use client'

import { motion } from 'framer-motion'

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  Tools: ['Git', 'Docker', 'Figma', 'VS Code', 'Vercel']
}

export function Skills() {
  return (
    <section 
      id="skills" 
      data-nav-theme="skills"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-100 pt-32 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-black/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-black">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="text-gray-800 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


