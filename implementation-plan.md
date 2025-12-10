# Implementation Plan - Portfolio

## Tech Stack

### Core
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Package Manager**: npm

### Styling
- **CSS Framework**: Tailwind CSS v3+
- **CSS-in-JS**: None (Tailwind + CSS Modules si es necesario)
- **Icons**: Lucide React (consistentes y ligeros)

### Animations
- **Main Library**: Framer Motion (animaciones React)
- **Scroll Animations**: Framer Motion + Intersection Observer
- **Smooth Scroll**: Lenis (más ligero que Locomotive)
- **Advanced Effects**: GSAP (solo si necesario)

### Development
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Conventional Commits

### Deployment
- **Hosting**: Vercel (integración perfecta con Next.js)
- **Domain**: Configurar después
- **Analytics**: Vercel Analytics (opcional)

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── about/
│   │   └── icons/
│   ├── fonts/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── fonts.ts            # Font configuration
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Link.tsx
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── SlideIn.tsx
│   │       ├── ScrollReveal.tsx
│   │       └── StaggerChildren.tsx
│   ├── lib/
│   │   ├── constants.ts        # Constantes globales
│   │   ├── utils.ts            # Funciones utilitarias
│   │   └── animations.ts       # Variantes de animaciones
│   ├── data/
│   │   ├── projects.ts         # Data de proyectos
│   │   ├── skills.ts           # Data de skills
│   │   └── contact.ts          # Data de contacto
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useMousePosition.ts
│   │   └── useMediaQuery.ts
│   └── types/
│       └── index.ts            # TypeScript types
├── .eslintrc.json
├── .prettierrc
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## Implementation Phases

### Phase 1: Setup & Foundation (Día 1)
**Objetivo**: Proyecto configurado y listo para desarrollar

#### Tasks:
- [x] Crear specs (design, implementation, portfolio)
- [ ] Inicializar Next.js con TypeScript
- [ ] Configurar Tailwind CSS
- [ ] Instalar dependencias (Framer Motion, Lenis, Lucide)
- [ ] Configurar ESLint y Prettier
- [ ] Configurar estructura de carpetas
- [ ] Setup de fuentes (SF Pro o similar)
- [ ] Crear layout base y globals.css
- [ ] Configurar tema y variables CSS/Tailwind
- [ ] Git init y primer commit

**Comandos**:
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir
cd portfolio
npm install framer-motion lenis lucide-react
npm install -D @types/node
```

**Deliverables**:
- Proyecto Next.js funcionando
- Tailwind configurado con tema personalizado
- Estructura de carpetas creada
- README.md con instrucciones

---

### Phase 2: Layout & Navigation (Día 1-2)
**Objetivo**: Estructura base y navegación funcionando

#### Tasks:
- [ ] Crear componente `Container` para max-width consistente
- [ ] Implementar `Navigation` component
  - [ ] Logo/nombre
  - [ ] Links de navegación
  - [ ] Mobile menu (hamburger)
  - [ ] Scroll behavior (transparent → blur)
  - [ ] Active section indicator
- [ ] Implementar `Footer` component
  - [ ] Links de redes sociales
  - [ ] Copyright
  - [ ] Back to top button
- [ ] Configurar smooth scroll (Lenis)
- [ ] Implementar scroll spy para nav activo

**Componentes**:
```typescript
// Navigation.tsx - Efecto Blur/Glass tipo Apple/Until Labs
- Estado: isScrolled, mobileMenuOpen
- Smooth scroll to sections
- Backdrop blur cuando scrolled (usando backdrop-filter CSS nativo)
- Animación de entrada

// Implementación del Blur Header:
<motion.nav
  className={cn(
    "fixed top-0 w-full z-50 transition-all duration-300",
    isScrolled 
      ? "backdrop-blur-md bg-black/70 border-b border-white/10" // ← Este es el efecto!
      : "bg-transparent"
  )}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.nav>

// Footer.tsx
- Social links con hover effects
- Back to top con scroll animation
```

**Nota sobre el Header Blur:**
El efecto blur/glass que ves en Until Labs, Apple, Vercel, etc. se logra con **CSS nativo**:
- `backdrop-blur-md` (Tailwind) = `backdrop-filter: blur(12px)` (CSS)
- `bg-black/70` = `background: rgba(0, 0, 0, 0.7)`
- No requiere librerías adicionales
- Funciona en todos los navegadores modernos
- Safari lo soporta perfectamente (de hecho, Apple lo popularizó)

**Deliverables**:
- Navegación responsive
- Smooth scrolling funcionando
- Footer básico

---

### Phase 3: Animation System (Día 2)
**Objetivo**: Sistema de animaciones reutilizable

#### Tasks:
- [ ] Crear componente `FadeIn`
- [ ] Crear componente `SlideIn` (up, down, left, right)
- [ ] Crear componente `ScrollReveal` (Intersection Observer)
- [ ] Crear componente `StaggerChildren`
- [ ] Crear custom hooks:
  - [ ] `useScrollProgress` (progress 0-1 del viewport)
  - [ ] `useMousePosition` (para magnetic effects)
  - [ ] `useMediaQuery` (para responsive)
- [ ] Configurar variantes de animación reutilizables
- [ ] Implementar `prefers-reduced-motion` support

**Animation Variants**:
```typescript
// lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

**Deliverables**:
- Componentes de animación reutilizables
- Hooks personalizados funcionando
- Ejemplos de uso documentados

---

### Phase 4: Hero Section (Día 2-3)
**Objetivo**: Primera impresión impactante

#### Tasks:
- [ ] Crear componente `Hero`
- [ ] Implementar título animado
  - [ ] Split text animation (caracteres o palabras)
  - [ ] Fade in + slide up con stagger
- [ ] Subtítulo con delay
- [ ] CTA button con hover effect
- [ ] Scroll indicator animado (bouncing arrow)
- [ ] Background effect (gradiente animado o partículas)
- [ ] Responsive design (text size, spacing)

**Design**:
```
Layout:
- Centrado vertical y horizontal
- 100vh height
- Padding horizontal adecuado
- Z-index layers (bg < content < nav)

Animations:
- Title: Split text, stagger 0.05s
- Subtitle: Fade in después de title (delay 0.5s)
- CTA: Slide up después de subtitle (delay 0.3s)
- Scroll indicator: Infinite bounce animation
```

**Deliverables**:
- Hero section completamente animado
- Responsive en todos los breakpoints
- Loading state optimizado

---

### Phase 5: Projects Section (Día 3-4)
**Objetivo**: Showcase de proyectos con estilo

#### Tasks:
- [ ] Crear archivo `data/projects.ts` con tus proyectos
- [ ] Crear componente `ProjectCard`
  - [ ] Imagen con lazy loading
  - [ ] Hover effect (scale + shadow)
  - [ ] Overlay con descripción
  - [ ] Tags de tecnologías
  - [ ] Link externo/github
- [ ] Crear componente `Projects` (grid layout)
- [ ] Implementar scroll reveal animations
- [ ] Filtro por categoría/tecnología (opcional)
- [ ] Modal para ver detalles (opcional)

**Data Structure**:
```typescript
// types/index.ts
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}
```

**Deliverables**:
- Grid de proyectos responsive
- Animaciones smooth en hover
- Data estructura clara y escalable

---

### Phase 6: About Section (Día 4)
**Objetivo**: Contar tu historia

#### Tasks:
- [ ] Crear componente `About`
- [ ] Layout split (texto + imagen/visual)
- [ ] Texto bio con paragraphs animados
- [ ] Foto/avatar con parallax effect (opcional)
- [ ] Timeline (experiencia/educación) (opcional)
- [ ] Scroll reveal animations
- [ ] Responsive (stack en mobile)

**Content**:
```
- Introducción personal (quién eres)
- Tu journey (cómo llegaste aquí)
- Qué te apasiona
- Qué buscas/ofreces
```

**Deliverables**:
- About section con buen storytelling
- Animaciones sutiles
- Responsive design

---

### Phase 7: Skills Section (Día 4-5)
**Objetivo**: Mostrar competencias técnicas

#### Tasks:
- [ ] Crear archivo `data/skills.ts`
- [ ] Crear componente `SkillCard`
- [ ] Implementar categorías (Frontend, Backend, Tools, etc.)
- [ ] Progress bars animados (opcional)
- [ ] Icons para cada tecnología
- [ ] Scroll reveal con stagger
- [ ] Responsive grid

**Categories**:
```typescript
Frontend: React, Next.js, TypeScript, Tailwind
Backend: Node.js, Python, APIs
Tools: Git, Docker, Figma
Soft Skills: (opcional)
```

**Deliverables**:
- Grid de skills organizado
- Animaciones al entrar al viewport
- Icons consistentes

---

### Phase 8: Contact Section (Día 5)
**Objetivo**: Manera fácil de contactarte

#### Tasks:
- [ ] Crear archivo `data/contact.ts`
- [ ] Crear componente `Contact`
- [ ] Email con copy-to-clipboard button
- [ ] Links a redes sociales (GitHub, LinkedIn, Twitter)
- [ ] Formulario de contacto (opcional, requiere backend)
  - [ ] Inputs con validación
  - [ ] Submit con loading state
  - [ ] Success/error messages
- [ ] Micro-interacciones en hover
- [ ] Animaciones de entrada

**Social Links**:
```
- GitHub
- LinkedIn
- Twitter/X
- Email
- CV/Resume (PDF)
```

**Deliverables**:
- Sección de contacto funcional
- Copy-to-clipboard funcionando
- Links a redes sociales

---

### Phase 9: Polish & Optimization (Día 5-6)
**Objetivo**: Detalles finales y performance

#### Tasks:
- [ ] **Performance**:
  - [ ] Optimizar imágenes (WebP, lazy loading)
  - [ ] Code splitting
  - [ ] Preload critical resources
  - [ ] Analyze bundle size
  - [ ] Lighthouse audit (score > 90)
- [ ] **Accessibility**:
  - [ ] Keyboard navigation test
  - [ ] Screen reader test
  - [ ] Focus states visibles
  - [ ] Alt text en imágenes
  - [ ] ARIA labels donde necesario
- [ ] **SEO**:
  - [ ] Metadata (title, description)
  - [ ] Open Graph tags
  - [ ] Twitter cards
  - [ ] Sitemap
  - [ ] robots.txt
- [ ] **Responsive**:
  - [ ] Test en móvil (iOS, Android)
  - [ ] Test en tablet
  - [ ] Test en diferentes browsers
- [ ] **Loading States**:
  - [ ] Loading spinner/skeleton
  - [ ] Progressive image loading
- [ ] **Error Handling**:
  - [ ] 404 page personalizada
  - [ ] Error boundaries
- [ ] **Final Touches**:
  - [ ] Favicon y app icons
  - [ ] Smooth transitions entre secciones
  - [ ] Micro-interacciones pulidas
  - [ ] Cursor personalizado (opcional)

**Deliverables**:
- Lighthouse score > 90
- Accesibilidad AA compliance
- SEO optimizado
- Cross-browser tested

---

### Phase 10: Deployment (Día 6)
**Objetivo**: Sitio live y accesible

#### Tasks:
- [ ] Push final a GitHub
- [ ] Conectar repo con Vercel
- [ ] Configurar environment variables (si las hay)
- [ ] Deploy a producción
- [ ] Test del sitio live
- [ ] Configurar dominio personalizado (opcional)
- [ ] Setup analytics (opcional)
- [ ] Share! 🎉

**Deployment Checklist**:
```bash
# Build test local
npm run build
npm start

# Check build size
# Check for errors
# Test performance

# Deploy
git push origin main
# Vercel auto-deploys
```

**Deliverables**:
- Portfolio live en internet
- URL funcionando
- Analytics configurado (opcional)

---

## Technical Decisions

### Why Next.js?
- ✅ SSR y SSG para mejor performance
- ✅ Optimización de imágenes automática
- ✅ File-based routing
- ✅ API routes (si necesitas backend después)
- ✅ Excelente DX (Developer Experience)
- ✅ Deploy fácil en Vercel

### Why Tailwind?
- ✅ Utility-first = desarrollo rápido
- ✅ Purge automático = bundle pequeño
- ✅ Responsive design fácil
- ✅ Tema customizable
- ✅ JIT mode = classes on-demand

### Why Framer Motion?
- ✅ API declarativa y fácil
- ✅ Optimizada para React
- ✅ Animaciones basadas en gestos
- ✅ Layout animations automáticas
- ✅ Comunidad grande

### Why TypeScript?
- ✅ Type safety
- ✅ Mejor DX (autocomplete, intellisense)
- ✅ Menos bugs en runtime
- ✅ Refactoring más seguro
- ✅ Documentación implícita

---

## Development Guidelines

### Naming Conventions
```typescript
// Components: PascalCase
Hero.tsx, ProjectCard.tsx

// Files: camelCase
utils.ts, animations.ts

// Constants: UPPER_SNAKE_CASE
const MAX_WIDTH = 1400

// CSS classes: kebab-case (Tailwind)
class="nav-link hover:text-blue"
```

### Git Workflow
```bash
# Feature branches
git checkout -b feature/hero-section
git checkout -b fix/navigation-mobile

# Commits (Conventional Commits)
feat: add hero section with animations
fix: navigation overflow on mobile
style: improve button hover effects
refactor: extract animation variants
docs: update README with setup instructions

# Push and PR
git push origin feature/hero-section
# Create PR on GitHub
```

### Code Style
- Use functional components
- Use TypeScript interfaces for props
- Extract repeated logic to hooks
- Keep components small and focused
- Comment complex logic
- Use Prettier for formatting

### Testing Strategy (Opcional)
```bash
# Unit tests: Vitest
# E2E tests: Playwright
# Visual regression: Chromatic (opcional)
```

---

## Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lenis": "^1.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### Optional Dependencies
```json
{
  "gsap": "^3.12.0",          // Solo si necesitas animaciones avanzadas
  "react-intersection-observer": "^9.5.0",  // Si no usas Framer Motion viewport
  "sharp": "^0.33.0"          // Para optimización de imágenes (Next.js lo usa)
}
```

---

## Performance Budget

### Bundle Sizes (Target)
- **Initial JS**: < 100KB (gzipped)
- **Total JS**: < 300KB (gzipped)
- **CSS**: < 20KB (gzipped)
- **Images**: WebP, < 500KB cada una
- **Fonts**: WOFF2, subset, < 100KB total

### Loading Metrics (Target)
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **TTI**: < 3.5s
- **TBT**: < 200ms
- **CLS**: < 0.1

---

## Resources & References

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

### Inspiration
- [Until Labs](https://www.untillabs.com/)
- [Apple](https://www.apple.com/)
- [Linear](https://linear.app/)
- [Stripe](https://stripe.com/)
- [Vercel](https://vercel.com/)

### Tools
- [Figma](https://figma.com) - Design (si quieres mockups)
- [Excalidraw](https://excalidraw.com) - Wireframes rápidos
- [Coolors](https://coolors.co) - Paletas de colores
- [Type Scale](https://typescale.com) - Escalas tipográficas

---

## Next Steps

1. ✅ Revisar y aprobar estas specs
2. ⏳ Implementar Phase 1 (Setup)
3. ⏳ Continuar con siguientes phases
4. ⏳ Iterar y mejorar

**¿Listo para empezar con Phase 1?** 🚀

