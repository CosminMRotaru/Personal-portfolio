import React from 'react'

export default function TopBar() {
  return (
    <header className="topbar w-full fixed top-0 left-0 h-[56px] flex items-center justify-center px-4 bg-white dark:bg-[#181818] border-b border-gray-200 dark:border-[#232323] z-50">
      <span className="font-bold text-4xl mt-3 text-[var(--text-primary)]">Portfolio</span>
    </header>
  )
}
