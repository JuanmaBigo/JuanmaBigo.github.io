# Portfolio Content Structure

Este archivo define el contenido que irá en tu portfolio. Rellena las secciones con tu información personal.

---

## 1. Personal Information

### Basics
```yaml
name: "Tu Nombre Completo"
title: "Tu Título Profesional"  # Ej: "Full Stack Developer", "Frontend Engineer"
tagline: "Un tagline corto y memorable"  # Ej: "Building delightful web experiences"
location: "Tu Ciudad, País"
timezone: "Tu Timezone"  # Ej: "GMT-3"
```

### Contact
```yaml
email: "tu@email.com"
phone: "+54 xxx xxx xxxx"  # Opcional
website: "tudominio.com"  # Este portfolio

social:
  github: "https://github.com/tuusername"
  linkedin: "https://linkedin.com/in/tuusername"
  twitter: "https://twitter.com/tuusername"  # Opcional
  instagram: ""  # Opcional
  dribbble: ""  # Opcional si eres designer
  medium: ""  # Opcional si escribes
```

---

## 2. Hero Section

### Main Headline
```
Opción 1: "Hola, soy [Nombre]"
Opción 2: "Construyo experiencias web que importan"
Opción 3: "Developer. Creator. Problem Solver."

[Define el tuyo aquí]
```

### Subtitle/Description
```
Un párrafo corto (2-3 líneas) que explique:
- Qué haces
- Tu especialidad
- Tu approach o filosofía

Ejemplo:
"Soy un desarrollador full stack apasionado por crear productos digitales
que combinan diseño excepcional con código limpio y performance."
```

### Call to Action
```yaml
primary_cta:
  text: "Ver mis proyectos"
  link: "#projects"

secondary_cta:  # Opcional
  text: "Contactarme"
  link: "#contact"
```

---

## 3. About Section

### Bio
```
Escribe 2-4 párrafos sobre ti:

Párrafo 1: Introducción
- Quién eres
- Tu background
- Qué te llevó a la programación

Párrafo 2: Tu Journey
- Cómo empezaste
- Qué has hecho
- Dónde trabajaste/estudiaste

Párrafo 3: Actualidad
- En qué estás enfocado ahora
- Qué te apasiona
- Tus intereses

Párrafo 4: Personal (opcional)
- Hobbies
- Intereses fuera del código
- Fun facts

[Escribe tu bio aquí]
```

### Quick Facts (Opcional)
```yaml
facts:
  - label: "Años de experiencia"
    value: "X+"
  - label: "Proyectos completados"
    value: "XX+"
  - label: "Tazas de café"
    value: "∞"
  - label: "Tecnologías"
    value: "XX+"
```

### Timeline (Opcional)
```yaml
timeline:
  - year: "2024"
    title: "Posición actual"
    company: "Empresa"
    description: "Qué haces actualmente"
    
  - year: "2023"
    title: "Posición anterior"
    company: "Empresa"
    description: "Qué hiciste"
    
  - year: "2022"
    title: "Educación"
    company: "Universidad/Bootcamp"
    description: "Qué estudiaste"
```

---

## 4. Projects Section

### Project Template
Usa este template para cada proyecto:

```yaml
project_1:
  id: "unique-slug"
  title: "Nombre del Proyecto"
  tagline: "Una línea descriptiva"
  description: |
    Párrafo corto explicando:
    - Qué es el proyecto
    - Qué problema resuelve
    - Tu rol en el proyecto
  
  long_description: |
    Descripción más detallada (para modal o página dedicada):
    - Context y motivación
    - Desafíos técnicos
    - Soluciones implementadas
    - Resultados/impacto
  
  image: "/images/projects/project-1.jpg"
  images:  # Opcional: más imágenes para galería
    - "/images/projects/project-1-1.jpg"
    - "/images/projects/project-1-2.jpg"
  
  technologies:
    - "React"
    - "Next.js"
    - "TypeScript"
    - "Tailwind CSS"
    - "PostgreSQL"
  
  category: "Web Development"  # Web, Mobile, Desktop, Other
  
  links:
    live: "https://proyecto.com"
    github: "https://github.com/user/repo"
    case_study: ""  # Opcional
  
  featured: true  # Si quieres destacarlo
  date: "2024"
  status: "completed"  # completed, in-progress, coming-soon
```

### Tus Proyectos
Llena al menos 3-6 proyectos:

```yaml
projects:
  # Proyecto 1
  - id: ""
    title: ""
    tagline: ""
    description: ""
    image: ""
    technologies: []
    category: ""
    links:
      live: ""
      github: ""
    featured: true
    date: ""
    
  # Proyecto 2
  - id: ""
    title: ""
    # ... [repite el template]
    
  # Proyecto 3
  - id: ""
    title: ""
    # ... [repite el template]
```

### Project Categories
```yaml
categories:
  - "All"
  - "Web Development"
  - "Mobile Apps"
  - "Open Source"
  - "Personal"
  - "Client Work"
  # Agrega las categorías que necesites
```

---

## 5. Skills Section

### Technical Skills

#### Frontend
```yaml
frontend:
  - name: "JavaScript"
    level: 90  # 0-100 (opcional, para progress bar)
    icon: "javascript"  # Nombre del icon de Lucide
    
  - name: "React"
    level: 85
    icon: "react"
    
  - name: "Next.js"
    level: 80
    icon: "layout"
    
  - name: "TypeScript"
    level: 75
    icon: "type"
    
  - name: "Tailwind CSS"
    level: 90
    icon: "palette"
    
  # Agrega más...
```

#### Backend
```yaml
backend:
  - name: "Node.js"
    level: 80
    icon: "server"
    
  - name: "Python"
    level: 70
    icon: "file-code"
    
  - name: "PostgreSQL"
    level: 75
    icon: "database"
    
  # Agrega más...
```

#### Tools & Others
```yaml
tools:
  - name: "Git"
    level: 85
    icon: "git-branch"
    
  - name: "Docker"
    level: 70
    icon: "box"
    
  - name: "Figma"
    level: 80
    icon: "figma"
    
  # Agrega más...
```

### Soft Skills (Opcional)
```yaml
soft_skills:
  - "Problem Solving"
  - "Team Collaboration"
  - "Communication"
  - "Time Management"
  - "Continuous Learning"
```

### Certifications (Opcional)
```yaml
certifications:
  - name: "Certificación X"
    issuer: "Organización"
    date: "2024"
    url: "https://certificado.com"
    
  # Agrega más...
```

---

## 6. Experience Section (Opcional)

Si quieres una sección dedicada a experiencia laboral:

```yaml
experience:
  - position: "Tu Posición"
    company: "Nombre de la Empresa"
    location: "Ciudad, País"
    type: "Full-time"  # Full-time, Part-time, Freelance, Contract
    start_date: "Enero 2023"
    end_date: "Presente"  # o fecha específica
    description: |
      - Responsabilidad 1
      - Responsabilidad 2
      - Logro destacado
    technologies:
      - "Tech 1"
      - "Tech 2"
    
  # Más experiencias...
```

---

## 7. Education Section (Opcional)

```yaml
education:
  - degree: "Título"
    institution: "Universidad/Bootcamp"
    location: "Ciudad, País"
    start_date: "2020"
    end_date: "2024"
    description: |
      - Información relevante
      - Proyectos destacados
      - Logros académicos
    
  # Más educación...
```

---

## 8. Testimonials Section (Opcional)

Si tienes testimonios de clientes/colegas:

```yaml
testimonials:
  - name: "Nombre Persona"
    position: "Posición"
    company: "Empresa"
    avatar: "/images/avatars/persona-1.jpg"
    text: |
      "El testimonial completo. Qué tan bien trabajaste,
      qué impacto tuviste, etc."
    rating: 5  # Opcional
    
  # Más testimonials...
```

---

## 9. Contact Section

### Contact Info
```yaml
contact:
  title: "Let's work together"
  subtitle: "Tengo disponibilidad para nuevos proyectos."
  
  email: "tu@email.com"
  
  availability:
    status: "available"  # available, busy, unavailable
    message: "Disponible para freelance y full-time"
  
  response_time: "24-48 horas"
```

### Contact Form (Opcional)
Si quieres incluir un formulario:

```yaml
contact_form:
  enabled: true
  fields:
    - name: "name"
      label: "Nombre"
      type: "text"
      required: true
      
    - name: "email"
      label: "Email"
      type: "email"
      required: true
      
    - name: "message"
      label: "Mensaje"
      type: "textarea"
      required: true
      
  submit_text: "Enviar mensaje"
  success_message: "¡Gracias! Te responderé pronto."
  error_message: "Hubo un error. Intenta de nuevo."
```

---

## 10. Footer

```yaml
footer:
  copyright: "© 2024 Tu Nombre. Todos los derechos reservados."
  
  links:
    - text: "Inicio"
      url: "#home"
    - text: "Proyectos"
      url: "#projects"
    - text: "Sobre mí"
      url: "#about"
    - text: "Contacto"
      url: "#contact"
  
  secondary_links:  # Opcional
    - text: "Privacy Policy"
      url: "/privacy"
    - text: "Terms of Service"
      url: "/terms"
```

---

## 11. SEO & Metadata

```yaml
seo:
  title: "Tu Nombre - Full Stack Developer"
  description: "Portfolio de [Tu Nombre]. Desarrollador especializado en React, Next.js y más. Basado en [Tu Ciudad]."
  keywords:
    - "full stack developer"
    - "react developer"
    - "next.js"
    - "tu nombre"
    - "tu ciudad developer"
  
  og_image: "/images/og-image.jpg"  # 1200x630px
  twitter_handle: "@tuusername"
  
  favicon: "/favicon.ico"
  theme_color: "#000000"
```

---

## 12. Misc Content

### 404 Page
```yaml
not_found:
  title: "404 - Página no encontrada"
  message: "La página que buscas no existe o fue movida."
  cta_text: "Volver al inicio"
  cta_link: "/"
```

### Loading States
```yaml
loading:
  spinner_text: "Cargando..."
  image_placeholder: "Cargando imagen..."
```

---

## Content Checklist

Antes de implementar, asegúrate de tener:

### Textos
- [ ] Bio completa
- [ ] Descripción de al menos 3-6 proyectos
- [ ] Lista de skills actualizada
- [ ] Información de contacto
- [ ] Títulos y taglines para cada sección

### Imágenes
- [ ] Foto personal / Avatar (para About)
- [ ] Screenshots/mockups de proyectos (mínimo 1 por proyecto)
- [ ] Favicon y app icons
- [ ] OG image para compartir en redes sociales
- [ ] Background images (si las necesitas)

### Links
- [ ] URLs de proyectos live (si están deployed)
- [ ] Links a repositorios de GitHub
- [ ] Links a redes sociales actualizados
- [ ] CV/Resume PDF (opcional)

### Legal (Opcional pero recomendado)
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy (si usas analytics)

---

## Content Guidelines

### Writing Tips
1. **Sé auténtico**: Escribe con tu propia voz
2. **Sé conciso**: Menos es más, especialmente en web
3. **Enfócate en valor**: Qué puedes ofrecer, no solo qué sabes
4. **Usa verbos activos**: "Desarrollé", "Implementé", "Lideré"
5. **Cuantifica cuando puedas**: "Mejoré performance en 50%"
6. **Revisa ortografía**: Usa Grammarly o similar

### Image Guidelines
1. **Calidad**: High resolution (pero optimizadas para web)
2. **Consistencia**: Mismo estilo/filtro en todas
3. **Formato**: WebP cuando sea posible (con fallback JPG)
4. **Tamaños recomendados**:
   - Avatar: 500x500px
   - Project images: 1600x900px (16:9)
   - OG image: 1200x630px
   - Favicon: 512x512px

### Link Guidelines
- Verifica que todos los links funcionen
- Usa HTTPS siempre que sea posible
- Abre links externos en nueva tab
- Considera agregar `rel="noopener noreferrer"` a links externos

---

## Next Steps

1. **Rellena este archivo** con tu información
2. **Recopila assets** (imágenes, íconos, etc.)
3. **Revisa y aprueba** el contenido
4. **Comienza implementación** con los otros specs

**¿Listo para llenar tu contenido?** ✍️

---

## Notas

- Puedes cambiar/agregar secciones según tus necesidades
- No todas las secciones son obligatorias
- Prioriza calidad sobre cantidad
- Puedes iterar y mejorar el contenido después del launch
- Considera tener versión en inglés si buscas trabajos internacionales




