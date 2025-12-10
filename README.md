# Portfolio Personal

Portfolio moderno construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✨ Navegación con efecto blur adaptativo (estilo Apple/Until Labs)
- 🎨 Animaciones suaves con Framer Motion
- 📱 Completamente responsive
- ⚡ Smooth scrolling con Lenis
- 🎯 Optimizado para SEO
- 🌙 Diseño minimalista tipo Apple
- ♿ Accesible (WCAG 2.1)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página home
│   │   └── globals.css         # Estilos globales
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Navigation.tsx  # Header con efectos
│   │   │   └── Footer.tsx      # Footer
│   │   ├── sections/           # Secciones de la página
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/                 # Componentes UI reutilizables
│   │   └── animations/         # Componentes de animación
│   │       └── SmoothScroll.tsx
│   ├── lib/                    # Utilidades y constantes
│   ├── data/                   # Data de proyectos, skills, etc.
│   ├── hooks/                  # Custom React hooks
│   └── types/                  # TypeScript types
├── public/                     # Assets estáticos
└── docs/                       # Documentación y specs
```

## 🎨 Personalización

### 1. Contenido Personal

Edita los siguientes archivos con tu información:

- `src/components/sections/Hero.tsx` - Tu intro y descripción
- `src/components/sections/About.tsx` - Tu bio
- `src/components/sections/Projects.tsx` - Tus proyectos
- `src/components/sections/Skills.tsx` - Tus habilidades
- `src/components/sections/Contact.tsx` - Tu información de contacto

### 2. Colores del Navigation

Edita los temas en `src/components/layout/Navigation.tsx`:

```typescript
const sectionThemes = {
  hero: {
    navBg: 'rgba(0, 0, 0, 0.7)',
    textColor: 'text-white',
    // ... más opciones
  },
  // ... más temas
}
```

### 3. Estilos Globales

Modifica variables en `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  /* Agrega más variables */
}
```

### 4. Tailwind Theme

Personaliza en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Tus colores personalizados
    },
    // Más configuraciones
  },
}
```

## 📝 Specs de Diseño

Consulta los siguientes archivos para más detalles:

- `design-specs.md` - Especificaciones de diseño completas
- `implementation-plan.md` - Plan de implementación por fases
- `portfolio-content.md` - Template para contenido
- `header-blur-reference.md` - Guía del header blur effect
- `navigation-complete-example.tsx` - Ejemplo completo de navegación

## 🚀 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Deploy automático en cada push

### Otras Opciones

- **Netlify:** Similar a Vercel
- **Railway:** Para apps full-stack
- **AWS Amplify:** Para proyectos enterprise

## 📊 Performance

Métricas objetivo:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
- Lighthouse Score: > 90

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels apropiados
- Contraste de colores WCAG AA
- `prefers-reduced-motion` support
- Semantic HTML5

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🤝 Contribuciones

¡Contribuciones, issues y feature requests son bienvenidos!

---

Hecho con ❤️ y ☕



