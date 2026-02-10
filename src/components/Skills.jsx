import { Server, Gamepad2, Bot, Code, Sparkles } from 'lucide-react'

const skillCards = [
  [
    {
      icon: Server, iconColor: '#A78BFA', badge: 'Primary', badgeColor: '#A78BFA',
      gradientFrom: 'rgba(124,58,237,0.08)',
      title: 'Backend Development', desc: 'REST APIs, server architecture, enterprise systems',
    },
    {
      icon: Gamepad2, iconColor: '#34D399', badge: 'Passion', badgeColor: '#60A5FA',
      gradientFrom: 'rgba(59,130,246,0.08)',
      title: 'Game Dev — Godot', desc: 'Building games with the Godot Engine',
    },
    {
      icon: Bot, iconColor: '#60A5FA', badge: 'Focused', badgeColor: '#22D3EE',
      gradientFrom: 'rgba(6,182,212,0.08)',
      title: 'AI & ML', desc: 'AI-paired programming, learning new AI tech',
    },
  ],
  [
    {
      icon: Code, iconColor: '#22D3EE', badge: 'Values', badgeColor: '#34D399',
      gradientFrom: 'rgba(52,211,153,0.08)',
      title: 'Clean Modern Code', desc: 'Performant, up-to-date, even if it means rebuilding',
    },
    {
      icon: Sparkles, iconColor: '#FBBF24', badge: 'Exploring', badgeColor: '#FBBF24',
      gradientFrom: 'rgba(245,158,11,0.08)',
      title: 'Emerging Tech', desc: "Always learning what's new, especially in AI",
      wider: true,
    },
  ],
]

function SkillCard({ card }) {
  return (
    <div
      className={`flex flex-col justify-between p-7 rounded-3xl border border-white/[0.063] backdrop-blur-[20px] h-[200px] ${card.wider ? 'w-[560px] flex-shrink-0' : 'flex-1'}`}
      style={{
        background: `linear-gradient(225deg, ${card.gradientFrom} 0%, rgba(7,7,14,0) 100%), rgba(255,255,255,0.02)`,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <card.icon size={32} color={card.iconColor} />
        <span className="text-[11px] font-semibold" style={{ color: card.badgeColor }}>{card.badge}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
        <p className="text-[13px] text-white/[0.33]">{card.desc}</p>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-[60px] px-8 md:px-20 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="px-4 py-1.5 rounded-full bg-white/[0.024] border border-white/[0.063] text-xs font-semibold text-white/[0.33] tracking-[1.5px]">
          What I Do
        </span>
        <h2 className="text-[44px] font-bold text-white text-center" style={{ letterSpacing: '-1.5px' }}>
          Skills &amp; Interests
        </h2>
      </div>

      {/* Bento grid */}
      <div className="flex flex-col gap-5 w-full">
        {skillCards.map((row, i) => (
          <div key={i} className="flex gap-5 w-full h-[200px]">
            {row.map((card) => (
              <SkillCard key={card.title} card={card} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
