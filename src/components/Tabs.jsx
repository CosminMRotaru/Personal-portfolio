import React from 'react'

export default function Tabs() {
  return (
    <div className="mt-1 tabs">
      <div className="flex gap-8 items-center justify-start text-[13px] uppercase tracking-wider text-[var(--text-secondary)] py-1">
        <div className="flex flex-col items-center">
          <span className="pb-1 text-[var(--text-primary)]">POSTS</span>
          <div className="w-6 h-[2px] bg-[var(--text-primary)] mt-1 rounded"></div>
        </div>
        <div className="flex flex-col items-center text-[var(--text-secondary)]">
          <span className="pb-1">PROJECTS</span>
          <div className="w-6 h-[1.5px] bg-transparent mt-1"></div>
        </div>
        <div className="flex flex-col items-center text-[var(--text-secondary)]">
          <span className="pb-1">EXPERIENCE</span>
          <div className="w-6 h-[1.5px] bg-transparent mt-1"></div>
        </div>
      </div>
    </div>
  )
}
