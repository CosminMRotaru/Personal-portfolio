import React from 'react'
import { site } from '../data'

export default function PostCard({ post }) {
  return (
    <article id={post.id} className="mt-6">
      <header className="flex items-center gap-3 py-3">
        <div className="w-15 h-15 rounded-full overflow-hidden flex items-center justify-center border post-avatar-border">
          <img src="/misc/profile.png" alt="avatar" className="w-15 h-12" />
        </div>
        <div className="flex-1 text-xl font-medium text-[var(--text-primary)]">
          <span className="inline-flex items-center gap-2">{site.username} <img src="/misc/tick.svg" alt="Verified" className="w-4 h-4 inline-block" /></span>
        </div>
      </header>

      <div className="bg-[var(--panel-2)]">
        {post.image ? (
          <img src={post.image} onError={(e) => { e.currentTarget.src = '/projects/placeholder.png' }} alt={post.title} className="w-full object-contain aspect-[6/6] max-h-[600px] rounded-sm object-center" />
        ) : (
          <div className="w-full bg-[#171717] aspect-[4/5] flex items-center justify-center rounded-sm">
            <div className="text-[var(--text-muted)] text-[15px]">No image</div>
          </div>
        )}
      </div>
      <div className="py-3">
        <p className="text-[18px] text-[var(--text-secondary)] mt-2 whitespace-pre-line">
          <span className="font-semibold mr-2 inline-flex items-center gap-1">{site.username} <img src="/misc/tick.svg" alt="Verified" className="w-4 h-4 inline-block" /></span>
          {post.caption}
        </p>

        <div className="mt-3 flex gap-4">
          {post.live && <a href={post.live} target="_blank" rel="noopener" className="text-xl text-[var(--accent)]">Live</a>}
          {post.code && <a href={post.code} target="_blank" rel="noopener" className="text-xl text-[var(--accent)]">Code</a>}
        </div>
      </div>
      <div className="ig-divider mt-4"></div>
    </article>
  )
}
