const projects = [
  {
    icon: '⏰',
    title: 'ESP32Clock',
    desc: 'A digital clock with 4 5×5 Matrix LED panels on an ESP32. 3D-printed resin case, PLA frontplate, internal cooling plate, reset button, and a dedicated USB-C debug port.',
    tags: ['ESP32', 'C/C++', '3D Printing', 'Hardware'],
    tagColor: '#A78BFA',
  },
  {
    icon: '📨',
    title: 'Rust ChatApp Backend',
    desc: 'Self-hostable chat backend in Rust. Modular architecture with DMs & group chats, MariaDB, SHA-256 auth, a custom Xtime datetime lib, and a LogExpect trait for clean error handling.',
    tags: ['Rust', 'MariaDB', 'Docker'],
    tagColor: '#60A5FA',
  },
  {
    icon: '🚀',
    wip: true,
    title: 'XPlane',
    desc: 'A revolutionary game in private development combining fast-paced shooter mechanics with entirely new gaming elements. More details coming soon.',
    tags: ['Godot', 'Game Dev', 'In Development'],
    tagColor: '#34D399',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-4 p-7 rounded-[20px] bg-white/[0.024] border border-white/[0.063] backdrop-blur-[20px] flex-1">
      {project.wip && (
        <span className="text-[10px] font-bold tracking-[1px] text-[#FBBF24]">WORK IN PROGRESS</span>
      )}
      <span className="text-4xl">{project.icon}</span>
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-[13px] text-white/40 leading-[1.6]">{project.desc}</p>
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-medium" style={{ color: project.tagColor }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-[60px] px-8 md:px-20 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          <span className="text-[13px] font-semibold text-white/40 tracking-[2px]">Projects</span>
        </div>
        <h2 className="text-[40px] font-bold text-white text-center" style={{ letterSpacing: '-1px' }}>
          What I've Built
        </h2>
        <p className="text-base text-white/[0.27] text-center">
          A selection of personal and public projects
        </p>
      </div>

      {/* Grid */}
      <div className="flex gap-6 w-full">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
