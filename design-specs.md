# Design Specifications - Portfolio

## Inspiración
Estilo Apple/Until Labs: Minimalista, elegante, animaciones suaves, scroll interactivo

## Paleta de Colores

### Principal
- **Background**: `#000000` (Negro profundo)
- **Surface**: `#111111` (Negro elevado)
- **Text Primary**: `#FFFFFF` (Blanco puro)
- **Text Secondary**: `#888888` (Gris medio)
- **Accent**: `#0071E3` (Azul Apple) o personalizado según tu marca
- **Accent Hover**: `#0077ED`

### Estados
- **Success**: `#34C759`
- **Warning**: `#FF9500`
- **Error**: `#FF3B30`

## Tipografía

### Fuentes
```css
Primary: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Mono: 'SF Mono', 'Fira Code', monospace
```

### Escala Tipográfica
- **Display**: 72px-96px (Títulos hero)
- **H1**: 48px-64px (Títulos principales)
- **H2**: 36px-48px (Subtítulos)
- **H3**: 28px-36px (Secciones)
- **Body Large**: 20px-24px (Texto destacado)
- **Body**: 16px-18px (Texto normal)
- **Small**: 14px (Metadatos, captions)

### Pesos
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Espaciado

### Sistema de 8pt
- `4px` - Extra pequeño
- `8px` - Pequeño
- `16px` - Medio
- `24px` - Grande
- `32px` - Extra grande
- `48px` - XXL
- `64px` - XXXL
- `96px` - Display
- `128px` - Hero

### Contenedores
- **Max Width Container**: 1400px
- **Content Max Width**: 1200px
- **Text Max Width**: 800px (para legibilidad)
- **Padding Horizontal**: 24px (mobile), 48px (tablet), 64px (desktop)

## Layout y Grid

### Breakpoints
```javascript
mobile: 0-640px
tablet: 641-1024px
desktop: 1025-1440px
wide: 1441px+
```

### Grid System
- **Columnas**: 12 columnas
- **Gap**: 24px (mobile), 32px (desktop)

## Componentes Clave

### 1. Hero Section
- **Altura**: 100vh
- **Animación**: Fade in + slide up al cargar
- **Elementos**:
  - Título grande animado
  - Subtítulo con delay
  - CTA button con hover effect
  - Scroll indicator animado

### 2. Navigation (Estilo Until Labs)
- **Tipo**: Fixed top, con backdrop blur adaptativo
- **Altura**: 80px (inicial) → 64px (scrolled)
- **Comportamiento**: 
  - Transparente al inicio
  - Background blur al hacer scroll (`backdrop-filter: blur(12px)`)
  - Se contrae al scrollear (height animation)
  - Logo scale animation (24px → 18px)
  - Links opcionales: se ocultan o reducen tamaño
  - **Color adaptativo**: Cambia según fondo de la sección (light/dark)
- **Transiciones**: 300ms ease-in-out
- **Links**: Smooth scroll a secciones
- **Temas**:
  - Dark theme: `bg-black/70 text-white` (fondos claros)
  - Light theme: `bg-white/70 text-black` (fondos oscuros)
- **Detection**: Intersection Observer para detectar sección visible

### 3. Project Cards
- **Layout**: Grid responsivo (1-2-3 columnas)
- **Hover Effects**:
  - Elevación suave (shadow)
  - Escala 1.02
  - Overlay con información
- **Elementos**:
  - Imagen/thumbnail
  - Título
  - Descripción corta
  - Tags/tecnologías
  - Link/CTA

### 4. About Section
- **Layout**: Split screen (texto + imagen/visual)
- **Animaciones**: 
  - Parallax suave en imagen
  - Fade in de texto por líneas
  - Skills con progress bars animados

### 5. Contact Section
- **Estilo**: Minimalista
- **Elementos**:
  - Email con copy button
  - Links a redes sociales
  - Formulario simple (opcional)
  - Micro-interacciones en hover

### 6. Footer
- **Altura**: Auto
- **Contenido**: 
  - Copyright
  - Links secundarios
  - Social media icons
  - "Back to top" button

## Animaciones y Transiciones

### Principios
1. **Timing**: Ease-out para entradas, ease-in para salidas
2. **Duración**: 0.3s-0.6s (rápido pero suave)
3. **Staging**: Elementos aparecen en secuencia, no todos a la vez
4. **Reducción de movimiento**: Respetar `prefers-reduced-motion`

### Efectos Principales

#### Scroll Animations
- **Fade In**: Opacity 0 → 1
- **Slide Up**: TranslateY(40px) → 0
- **Scale**: Scale(0.95) → 1
- **Stagger**: Delay incremental entre elementos

#### Hover States
- **Links**: Underline slide (0.3s)
- **Buttons**: Escala + sombra (0.2s)
- **Cards**: Elevación + escala (0.4s)
- **Images**: Escala en container con overflow hidden

#### Page Transitions
- **Entrada**: Fade + slide desde abajo
- **Salida**: Fade rápido
- **Duración**: 0.4s-0.6s

### Micro-interacciones
- Cursor personalizado (opcional)
- Ripple effect en clicks
- Loading states suaves
- Smooth scroll entre secciones

## Efectos Especiales (Tipo Until Labs)

### 1. Scroll-Triggered Animations
- Elementos aparecen cuando entran al viewport
- Progress bars que se llenan
- Números que cuentan (counter animations)
- Parallax suave en fondos

### 2. Text Reveal Animations
- Caracteres aparecen uno por uno
- Líneas se revelan desde abajo
- Split text con stagger

### 3. Magnetic Buttons
- Botones que "atraen" el cursor
- Efecto sutil, no exagerado

### 4. Smooth Scrolling
- Lenis o Locomotive Scroll
- Scroll suave tipo Apple

### 5. Background Effects
- Gradientes animados sutiles
- Grain texture overlay (opcional)
- Mesh gradients (WebGL opcional)

## Imágenes y Media

### Formatos
- **Fotografías**: WebP con fallback JPG
- **Ilustraciones**: SVG cuando sea posible
- **Icons**: SVG sprites
- **Videos**: MP4 (H.264)

### Optimización
- Lazy loading para imágenes below the fold
- Blur placeholder mientras carga
- Responsive images (srcset)
- Compresión agresiva (80% quality)

### Aspectos Ratios
- Hero: 16:9 o 21:9
- Projects: 16:9 o 4:3
- Thumbnails: 1:1 o 16:9

## Accesibilidad

### Requisitos
- Contraste mínimo: 4.5:1 (texto normal)
- Contraste mínimo: 3:1 (texto grande)
- Focus states visibles
- Navegación por teclado completa
- Alt text en todas las imágenes
- ARIA labels donde sea necesario
- Skip to content link

### Semántica HTML
- Uso correcto de heading hierarchy (h1-h6)
- Semantic HTML5 (header, nav, main, section, article, footer)
- Landmark regions apropiadas

## Performance

### Métricas Objetivo
- **FCP** (First Contentful Paint): < 1.5s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **FID** (First Input Delay): < 100ms
- **Lighthouse Score**: > 90

### Optimizaciones
- Code splitting
- Tree shaking
- Lazy loading de componentes pesados
- Preload de fuentes críticas
- Defer de scripts no críticos

## Responsive Design

### Mobile First
- Diseñar primero para mobile
- Progressive enhancement para desktop

### Consideraciones Mobile
- Touch targets: mínimo 44x44px
- Gestos naturales (swipe, tap)
- Menú hamburguesa accesible
- Performance optimizado (imágenes más pequeñas)

### Consideraciones Desktop
- Aprovechar espacio horizontal
- Hover states ricos
- Animaciones más elaboradas
- Múltiples columnas

## Inspiración Visual

### Referencias
- Apple.com (animaciones, tipografía)
- Until Labs (scroll effects, layout)
- Linear.app (minimalismo, animaciones)
- Stripe.com (degradados, ilustraciones)
- Vercel.com (tipografía, spacing)

### Lo que NO hacer
- ❌ Animaciones excesivas que distraen
- ❌ Colores brillantes sin propósito
- ❌ Texto difícil de leer (contraste bajo)
- ❌ Layouts complicados sin razón
- ❌ Cargar todo el contenido de una vez
- ❌ Ignorar mobile
- ❌ Auto-play de videos con sonido

