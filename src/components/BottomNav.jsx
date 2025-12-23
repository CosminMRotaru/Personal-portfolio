import React from 'react'
import { site } from '../data'

export default function BottomNav({ refs }) {
  const scrollTo = (r) => r && r.current && r.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <nav className="bottomnav fixed bottom-0 left-0 w-full h-[56px] bg-white dark:bg-[#181818] border-t border-gray-200 dark:border-[#232323] flex items-center justify-around z-50">
      <button
        onClick={() => scrollTo(refs?.topRef)}
        className="flex flex-col items-center justify-center flex-1 min-w-[44px]"
        aria-label="Home"
      >
        <img src="/misc/home.svg" alt="Home" className="w-6 h-6 mx-auto" />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button
        onClick={() => scrollTo(refs?.aboutRef)}
        className="flex flex-col items-center justify-center flex-1 min-w-[44px]"
        aria-label="About"
      >
        <img src="/misc/about.svg" alt="About" className="w-6 h-6 mx-auto" />
        <span className="text-xs mt-1">About</span>
      </button>
      <button
        onClick={() => scrollTo(refs?.projectsRef)}
        className="flex flex-col items-center justify-center flex-1 min-w-[44px]"
        aria-label="Projects"
      >
        <img src="/misc/projects.svg" alt="Projects" className="w-6 h-6 mx-auto" />
        <span className="text-xs mt-1">Projects</span>
      </button>
      <button
        onClick={() => scrollTo(refs?.expRef)}
        className="flex flex-col items-center justify-center flex-1 min-w-[44px]"
        aria-label="Experience"
      >
        <img src="/misc/experience.svg" alt="Experience" className="w-6 h-6 mx-auto" />
        <span className="text-xs mt-1">Experience</span>
      </button>
      <a
        href={site.resume}
        download="Rotaru-Marius-Cosmin-CV.pdf"
        target="_blank"
        rel="noopener"
        className="flex flex-col items-center justify-center flex-1 min-w-[44px]"
        aria-label="Resume"
      >
        <img src="/misc/resume.svg" alt="Resume" className="w-6 h-6 mx-auto" />
        <span className="text-xs mt-1">Resume</span>
      </a>
    </nav>
  )
}
