import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}



