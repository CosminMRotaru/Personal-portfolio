import React from 'react'
import { site } from '../data'

export default function Sidebar({ refs }) {
  const scrollTo = (r) => r && r.current && r.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <aside className="hidden md:flex flex-col sidebar fixed left-0 top-0 h-full px-2 py-5">
      <div className="brand text-[var(--text-primary)]">Portfolio</div>

      <nav className="flex flex-col gap-1 nav">
        <button onClick={() => scrollTo(refs.topRef)} className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/home.svg" alt="Home" className="w-full h-full" /></span>
          <span className="ml-3 text-[16px]">Home</span>
        </button>
        <button onClick={() => scrollTo(refs.aboutRef)} className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/about.svg" alt="About" className="w-full h-full" /></span>
          <span className="ml-3 text-[16px]">About</span>
        </button>
        <button onClick={() => scrollTo(refs.projectsRef)} className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/projects.svg" alt="Projects" className="w-full h-full" /></span>
          <span className="ml-3 text-[16px]">Projects</span>
        </button>
        <button onClick={() => scrollTo(refs.expRef)} className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/experience.svg" alt="Experience" className="w-full h-full" /></span>
          <span className="ml-3 text-[16px]">Experience</span>
        </button>
      </nav>

      <div className="mt-3 sidebar-links">
        <a href={site.resume} download="Rotaru-Marius-Cosmin-CV.pdf" target="_blank" rel="noopener" className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/resume.svg" alt="Resume" className="w-full h-full" /></span>
          <span className="ml-3 text-[20px]">Resume</span>
        </a>
        <a href={site.github} target="_blank" rel="noopener" className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/github.svg" alt="GitHub" className="w-full h-full" /></span>
          <span className="ml-3 text-[20px]">GitHub</span>
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener" className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/linkedin.svg" alt="LinkedIn" className="w-full h-full" /></span>
          <span className="ml-3 text-[20px]">LinkedIn</span>
        </a>
        <a href={`mailto:${site.email}`} className="w-full flex items-center gap-3 pl-4 h-[50px] rounded-md hover:bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]">
          <span className="sidebar-icon w-10 h-8 flex items-center justify-center" aria-hidden><img src="/misc/mail.svg" alt="Mail" className="w-full h-full" /></span>
          <span className="ml-3 text-[20px]">Mail</span>
        </a>

      </div>
    </aside>
  )
}
