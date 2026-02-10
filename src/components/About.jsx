import { Code, Gamepad2, Bot } from 'lucide-react'

const infoCards = [
  { icon: Code, color: '#7C3AED', title: 'Backend Dev', desc: 'APIs & server-side logic' },
  { icon: Gamepad2, color: '#3B82F6', title: 'Game Dev', desc: 'Godot Engine' },
  { icon: Bot, color: '#06B6D4', title: 'AI Enthusiast', desc: 'AI-paired programming' },
]

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-[60px] px-8 md:px-20 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="px-4 py-1.5 rounded-full bg-white/[0.024] border border-white/[0.063] text-xs font-semibold text-white/[0.33] tracking-[1.5px]">
          About Me
        </span>
        <h2 className="text-[44px] font-bold text-white text-center" style={{ letterSpacing: '-1.5px' }}>
          Coding since I was young,{'\n'}
          now building the future with AI
        </h2>
      </div>

      {/* Content row */}
      <div className="flex gap-6 w-full">
        {/* Photo */}
        <div className="w-[420px] h-[480px] rounded-3xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/[0.063] flex-shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-violet-600/30 via-blue-500/20 to-cyan-400/10 flex items-center justify-center text-white/20 text-6xl">
            👨‍💻
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 flex-1 justify-center">
          <p className="text-[17px] text-white/[0.53] leading-[1.7]">
            I've been programming in my free time for over 8 years. What started as a hobby has grown into a deep passion for backend development, game creation, and exploring the cutting edge of AI. I'm currently studying Computer Science at TH Rosenheim and working as a Werkstudent at Agenda Informationssysteme GmbH &amp; Co. KG.
          </p>
          <p className="text-[17px] text-white/40 leading-[1.7]">
            I'm passionate about writing clean, modern code that is not just performant but also up to date — even if that means rebuilding things from scratch. This portfolio website was entirely designed with AI assistance, reflecting my dedication to AI-paired programming.
          </p>

          {/* Info cards */}
          <div className="flex gap-4 w-full">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.024] border border-white/[0.063] backdrop-blur-[20px] flex-1"
              >
                <card.icon size={24} color={card.color} />
                <span className="text-sm font-semibold text-white/80">{card.title}</span>
                <span className="text-xs text-white/[0.33]">{card.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
