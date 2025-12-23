import React from 'react'
import { site, posts } from '../data'

export default function ProfileHeader() {
  const postsCount = posts.length
  const projectsCount = posts.filter((p) => p.type === 'project').length

  return (
    <>
      { }
      <div className="flex items-start gap-6">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex items-center justify-center avatar-border">
          <img src="/misc/profile.png" alt="avatar" className="w-[160px] h-[147px]" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h1 className="text-[30px] font-bold username">{site.username}<img src="/misc/tick.svg" alt="Verified" className=" ml-2 w-5 h-5 inline-block" /></h1>
          </div>

          <div className="text-[20px] font-semibold text-[var(--text-secondary)] mt-1">{site.fullName}</div>

          <div className="flex items-center gap-6 mt-3 profile-meta">
            <div className="flex items-baseline gap-2"><span className="font-semibold text-[18px]">{postsCount}</span><span className="text-[18px] text-[var(--text-secondary)]">Posts</span></div>
            <div className="flex items-baseline gap-2"><span className="font-semibold text-[18px]">{projectsCount}</span><span className="text-[18px] text-[var(--text-secondary)]">Projects</span></div>
            <div className="flex items-baseline gap-2"><span className="font-semibold text-[18px]">∞</span><span className="text-[18px] text-[var(--text-secondary)]">Stack</span></div>
          </div>

          <p className="text-[18px] text-[var(--text-secondary)] mt-3 max-w-[720px] profile-bio">Full-Stack Developer | React, Node.js, TypeScript</p>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-3 profile-actions">
          <a className="inline-flex items-center justify-center h-[50px] px-[120px] rounded-[12px] bg-[#405DE6] text-[var(--text-primary)] text-[15px] font-semibold hover:bg-[#303030]" href={`mailto:${site.email}`}>Message</a>
          <a className="inline-flex items-center justify-center h-[50px] px-[120px] rounded-[12px] bg-[#313338] text-[var(--text-primary)] text-[15px] font-semibold hover:bg-[#303030]" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a className="inline-flex items-center justify-center h-[50px] px-[120px] rounded-[12px] bg-[#313338] text-[var(--text-primary)] text-[15px] font-semibold hover:bg-[#303030]" href={site.github} target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </>
  )
}
