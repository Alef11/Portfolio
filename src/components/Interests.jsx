const interests = [
  {
    icon: '🏎️',
    title: 'Cars & Tech',
    desc: 'Fascinated by the intersection of automotive engineering and modern technology.',
  },
  {
    icon: '🏁',
    title: 'Karting',
    desc: 'Hitting the track whenever I can — nothing like go-karting to clear the mind.',
  },
  {
    icon: '🖨️',
    title: '3D Printing',
    desc: 'Own a 3D printer, building small-scale passion and hardware projects.',
  },
  {
    icon: '✈️',
    title: 'Travel',
    desc: 'Exploring Europe and beyond — my goal is to see the whole world.',
  },
]

function InterestCard({ item }) {
  return (
    <div className="flex flex-col items-center gap-3 p-7 rounded-[20px] bg-white/[0.024] border border-white/[0.063] backdrop-blur-[20px] flex-1">
      <span className="text-4xl">{item.icon}</span>
      <h3 className="text-base font-semibold text-white text-center">{item.title}</h3>
      <p className="text-xs text-white/40 leading-[1.5] text-center">{item.desc}</p>
    </div>
  )
}

export default function Interests() {
  return (
    <section className="flex flex-col gap-[60px] px-8 md:px-20 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          <span className="text-[13px] font-semibold text-white/40 tracking-[2px]">Interests</span>
        </div>
        <h2 className="text-[40px] font-bold text-white text-center" style={{ letterSpacing: '-1px' }}>
          What I'm Into Beyond Code
        </h2>
        <p className="text-base text-white/[0.27] text-center">
          Cars, karting, 3D printing, and exploring the world
        </p>
      </div>

      {/* Grid */}
      <div className="flex gap-6 w-full">
        {interests.map((item) => (
          <InterestCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
