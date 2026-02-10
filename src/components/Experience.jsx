const cvEntries = [
  {
    date: 'Current',
    period: 'Since 2026',
    typeBadge: 'Werkstudent',
    typeColor: '#7C3AED',
    typeBg: 'rgba(124, 58, 237, 0.133)',
    typeBorder: 'rgba(124, 58, 237, 0.267)',
    gradientFrom: 'rgba(124, 58, 237, 0.07)',
    title: 'Werkstudent',
    company: 'Agenda Informationssysteme GmbH & Co. KG · Rosenheim',
    desc: 'Working on backend systems and enterprise software solutions as a working student alongside my CS studies.',
  },
  {
    date: 'Current',
    period: 'Since Oct. 2023',
    typeBadge: 'Education',
    typeColor: '#60A5FA',
    typeBg: 'rgba(59, 130, 246, 0.133)',
    typeBorder: 'rgba(59, 130, 246, 0.267)',
    gradientFrom: 'rgba(59, 130, 246, 0.07)',
    title: 'B.Sc. Computer Science',
    company: 'Technische Hochschule Rosenheim',
    desc: 'Studying Computer Science with focus on software engineering, algorithms, and modern development practices.',
  },
  {
    date: '1 Year',
    period: '2023 — 2024',
    typeBadge: 'Founder',
    typeColor: '#34D399',
    typeBg: 'rgba(52, 211, 153, 0.133)',
    typeBorder: 'rgba(52, 211, 153, 0.267)',
    gradientFrom: 'rgba(52, 211, 153, 0.07)',
    title: 'Solo Developer & Founder',
    company: 'Own Company',
    desc: 'Ran my own development company as a solo developer for one year, handling everything from product design to development and deployment.',
  },
  {
    date: '8+ Years',
    period: 'Since ~2017',
    typeBadge: 'Self-taught',
    typeColor: '#FBBF24',
    typeBg: 'rgba(245, 158, 11, 0.133)',
    typeBorder: 'rgba(245, 158, 11, 0.267)',
    gradientFrom: 'rgba(245, 158, 11, 0.07)',
    title: 'Self-taught Programmer',
    company: 'Hobby & Passion Projects',
    desc: 'Over 8 years of self-driven learning and building projects in free time — from small scripts to full applications, game prototypes, and experiments with emerging technologies.',
  },
]

function CVEntry({ entry }) {
  return (
    <div className="flex w-full rounded-3xl bg-white/[0.024] border border-white/[0.063] backdrop-blur-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.125)] overflow-hidden">
      {/* Left panel */}
      <div
        className="flex flex-col gap-2 justify-center w-[220px] flex-shrink-0 py-7 px-6"
        style={{
          background: `linear-gradient(225deg, ${entry.gradientFrom} 0%, rgba(7,7,14,0) 100%), rgba(255,255,255,0.016)`,
        }}
      >
        <span className="text-[13px] font-bold" style={{ color: entry.typeColor }}>{entry.date}</span>
        <span className="text-xs text-white/[0.27]">{entry.period}</span>
        <span
          className="inline-block w-fit px-2.5 py-1 text-[10px] font-semibold rounded-full"
          style={{
            color: entry.typeColor,
            background: entry.typeBg,
            border: `1px solid ${entry.typeBorder}`,
          }}
        >
          {entry.typeBadge}
        </span>
      </div>

      {/* Right panel */}
      <div className="flex flex-col gap-2.5 justify-center py-7 px-8 flex-1">
        <h3 className="text-xl font-bold text-white">{entry.title}</h3>
        <p className="text-sm font-medium text-white/40">{entry.company}</p>
        <p className="text-[13px] text-white/[0.27] leading-[1.5]">{entry.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="flex flex-col gap-[60px] px-8 md:px-20 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="px-4 py-1.5 rounded-full bg-white/[0.024] border border-white/[0.063] text-xs font-semibold text-white/[0.33] tracking-[1.5px]">
          Lebenslauf
        </span>
        <h2 className="text-[44px] font-bold text-white text-center" style={{ letterSpacing: '-1.5px' }}>
          Education &amp; Experience
        </h2>
        <p className="text-[17px] text-white/[0.33] text-center">
          My professional journey — from self-taught hobby programmer to CS student and working developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-8 w-full">
        {cvEntries.map((entry) => (
          <CVEntry key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  )
}
