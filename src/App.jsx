import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="max-w-[1200px] mx-auto relative">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Interests />
      <CTA />
      </div>
      <Footer />
    </div>
  )
}
