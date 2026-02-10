import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D1A99] backdrop-blur-[40px] border-b border-white/[0.063]">
      <div className="flex items-center justify-between h-[72px] px-8 md:px-20 max-w-[1600px] mx-auto">
      <span className="text-xl font-bold tracking-tight text-white" style={{ letterSpacing: '-0.5px' }}>
        Alex.dev
      </span>

      <div className="flex items-center gap-9 h-full">
        <a href="#about" className="text-sm font-medium text-white/60 hover:text-white transition-colors">About</a>
        <a href="#projects" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Skills</a>
        <a href="#contact" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Contact</a>

        <a
          href="#contact"
          className="flex items-center px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-white/[0.07] border border-white/[0.125] backdrop-blur-[20px] hover:bg-white/[0.12] transition-colors"
        >
          Let's Talk
        </a>
      </div>
      </div>
    </nav>
  )
}
