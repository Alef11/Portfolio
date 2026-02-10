import { Instagram, Linkedin, Github } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03]">
      <div className="flex flex-col gap-10 px-8 md:px-20 pt-[60px] pb-10 max-w-[1600px] mx-auto">
      {/* Top row */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-white">Alex.dev</span>
          <span className="text-sm text-white/[0.27]">CS Student · Developer · Tech Enthusiast</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.063] hover:bg-white/[0.06] transition-colors"
            >
              <Icon size={20} className="text-white/40" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.03]" />

      {/* Bottom row */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[13px] text-white/20">© 2026 Alex. Designed with AI.</span>
        <div className="flex gap-6">
          <a href="#" className="text-[13px] text-white/20 hover:text-white/40 transition-colors">Privacy</a>
          <a href="#" className="text-[13px] text-white/20 hover:text-white/40 transition-colors">Terms</a>
        </div>
      </div>
      </div>
    </footer>
  )
}
