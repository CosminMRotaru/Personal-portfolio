import React from 'react'
import PostCard from './PostCard'

export default function Feed({ posts, refs }) {
  const firstProjectId = posts.find((p) => p.type === 'project')?.id

  return (
    <div className="mt-6">
      {posts.map((p) => {
        const ref = p.id === 'about' ? refs.aboutRef : p.id === firstProjectId ? refs.projectsRef : p.id === 'experience' ? refs.expRef : null
        return (
          <div key={p.id} ref={ref}>
            <PostCard post={p} />
          </div>
        )
      })}
    </div>
  )
}
