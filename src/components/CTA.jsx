import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative w-full overflow-hidden px-8 md:px-20 py-[100px]">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] bg-[#7C3AED33] opacity-50 left-[20%] top-[50px]" />
      <div className="ambient-orb w-[350px] h-[350px] bg-[#3B82F633] opacity-40 left-[60%] top-[150px]" />

      {/* Glass panel */}
      <div className="relative mx-auto flex flex-col items-center gap-8 w-full max-w-[1120px] px-8 md:px-[100px] py-20 rounded-[32px] bg-white/[0.024] border border-white/[0.063] backdrop-blur-[40px] shadow-[0_12px_60px_rgba(0,0,0,0.25)]">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-[20px] bg-white/[0.03] border border-white/[0.063]">
          <Mail size={28} color="#A78BFA" />
        </div>

        <h2 className="text-5xl font-bold text-white text-center" style={{ letterSpacing: '-1.5px' }}>
          Lets chat?
        </h2>
        <p className="text-[17px] text-white/[0.33] text-center leading-[1.6]">
          Whether it's backend systems, game prototypes, or AI-driven tools — I'm always open to exciting projects and opportunities.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@alex.dev"
            className="flex items-center gap-2.5 px-10 py-[18px] rounded-full bg-white text-[#07070E] text-base font-semibold shadow-[0_4px_30px_rgba(255,255,255,0.125)] hover:bg-white/90 transition-colors"
          >
            Get In Touch
            <ArrowRight size={20} />
          </a>
          <a
            href="mailto:hello@alex.dev"
            className="flex items-center gap-2.5 px-10 py-[18px] rounded-full bg-white/[0.03] text-white/[0.67] text-base font-medium border border-white/[0.125] hover:bg-white/[0.06] transition-colors"
          >
            hello@alex.dev
          </a>
        </div>
      </div>
    </section>
  )
}
