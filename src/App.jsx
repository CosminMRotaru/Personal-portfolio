import React, { useRef } from 'react'
import Sidebar from './components/Sidebar'
import ProfileHeader from './components/ProfileHeader'
import Highlights from './components/Highlights'
import Feed from './components/Feed'
import { posts } from './data'

import TopBar from './components/TopBar'

import BottomNav from './components/BottomNav'

export default function App() {
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const expRef = useRef(null)

  const refs = { topRef, aboutRef, projectsRef, expRef }

  return (
    <div className="app-shell flex min-h-screen md:pl-[260px]">
      <TopBar />

      <Sidebar refs={refs} />

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[1135px] px-4 pt-10 pb-6" ref={topRef}>
          <div className="w-full pl-[100px] mx-auto content-inner">
            <ProfileHeader />

            <section className="mt-3 ">
              <h3 className="text-[18px] font-semibold text-[var(--text-secondary)] mb-3 ">Skills</h3>
              <Highlights />
            </section>
          </div>

          <Feed refs={refs} posts={posts} />
        </div>
      </div>
      <BottomNav refs={refs} />
    </div>
  )
}
