import { ArrowRight, Code } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[800px] overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-[#7C3AED55] opacity-70 left-[14%] top-[100px]" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[#3B82F644] opacity-60 left-[50%] top-[300px]" />
      <div className="ambient-orb w-[350px] h-[350px] bg-[#06B6D433] opacity-50 left-[65%] top-[50px]" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-20 py-20">
      {/* Hero content */}
      <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pt-20">
        <div className="flex flex-col gap-8 max-w-[800px]">
          {/* Badge */}
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
            <div className="w-2 h-2 rounded-full bg-[#34D399]" />
            <span className="text-[13px] font-medium text-white/[0.67]">
              CS Student · Werkstudent · 8+ Years Coding
            </span>
          </div>

          {/* Headline */}
          <h1 className="gradient-text text-[72px] font-bold leading-[1.05]" style={{ letterSpacing: '-2.5px' }}>
            Developer &amp;<br />
            Game Creator,<br />
            AI Enthusiast.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/40 leading-[1.6] max-w-[600px]">
            Computer Science student at TH Rosenheim, passionate about
            clean modern code, AI-paired programming, and game development in Godot.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#07070E] text-[15px] font-semibold shadow-[0_4px_30px_rgba(255,255,255,0.125)] hover:bg-white/90 transition-colors"
            >
              Lets chat
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.03] text-white/80 text-[15px] font-medium border border-white/[0.125] hover:bg-white/[0.06] transition-colors"
            >
              See Projects
              <Code size={18} />
            </a>
          </div>
        </div>

        {/* Stats card */}
        <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-[40px] shadow-[0_8px_40px_rgba(0,0,0,0.19)] w-[385px] flex-shrink-0 self-start mt-8 lg:mt-0">
          <div className="flex flex-col items-center gap-1 flex-1">
            <span className="text-[40px] font-bold text-white" style={{ letterSpacing: '-1px' }}>8+</span>
            <span className="text-[13px] font-medium text-white/[0.33]">Years Coding</span>
          </div>
          <div className="w-px h-[60px] bg-white/[0.08]" />
          <div className="flex flex-col items-center gap-1 flex-1">
            <span className="text-[40px] font-bold text-white" style={{ letterSpacing: '-1px' }}>6th</span>
            <span className="text-[13px] font-medium text-white/[0.33]">Semester CS</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
