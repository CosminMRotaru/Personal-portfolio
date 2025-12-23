import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { highlights } from "../data"

const DURATION_MS = 5000

export default function Highlights() {
  const ids = useMemo(() => highlights.map((h) => h.id), [])
  const [openId, setOpenId] = useState(null)

  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 2)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2)
  }, [])

  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return

    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [updateScrollButtons])

  const scrollCarousel = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.7
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  const [progress, setProgress] = useState(0)

  const [mounted, setMounted] = useState(false)

  const rafRef = useRef(null)
  const startRef = useRef(0)

  const index = openId ? ids.indexOf(openId) : -1
  const isOpen = openId !== null && index !== -1

  const close = () => {
    setMounted(false)
    window.setTimeout(() => setOpenId(null), 160)
  }

  const open = (id) => {
    setOpenId(id)
    requestAnimationFrame(() => setMounted(true))
  }

  const goNext = () => {
    if (!isOpen) return
    const nextIndex = index + 1
    if (nextIndex >= ids.length) {
      close()
      return
    }
    setOpenId(ids[nextIndex])
  }

  const goPrev = () => {
    if (!isOpen) return
    const prevIndex = index - 1
    if (prevIndex < 0) return
    setOpenId(ids[prevIndex])
  }

  useEffect(() => {
    if (!isOpen) return

    setProgress(0)
    startRef.current = performance.now()

    const tick = (t) => {
      const elapsed = t - startRef.current
      const p = Math.min(1, elapsed / DURATION_MS)
      setProgress(p)

      if (p >= 1) {
        goNext()
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, openId])

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) close()
  }

  const onStoryClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < rect.width / 2) goPrev()
    else goNext()
  }

  return (
    <div className="highlights-carousel-wrapper">
      {canScrollLeft && (
        <button
          type="button"
          className="highlights-carousel-btn highlights-carousel-btn--left"
          onClick={() => scrollCarousel('left')}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      <div ref={scrollRef} className="highlights highlights-scroll">
        {highlights.map((h) => (
          <div key={h.id} className="highlight-item">
            <button
              onClick={() => open(h.id)}
              className="flex flex-col items-center gap-2"
              type="button"
            >
              <div className="highlight-outer rounded-full flex items-center justify-center highlight-border">
                <div className="highlight-inner rounded-full bg-[var(--panel)] flex items-center justify-center">
                  <img src={h.img} alt={h.label} className="highlight-img" />
                </div>
              </div>
              <div className="text-[13px] text-[var(--text-muted)] mt-1 text-center">
                {h.label}
              </div>
            </button>
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          type="button"
          className="highlights-carousel-btn highlights-carousel-btn--right"
          onClick={() => scrollCarousel('right')}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {openId && (
        <div
          className={[
            "fixed inset-0 z-[999] flex items-center justify-center",
            "bg-black/70 backdrop-blur-[2px]",
            "transition-opacity duration-150",
            mounted ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={onOverlayClick}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className={[
              "relative w-[min(920px,92vw)]",
              "transition-transform duration-150 ease-out",
              mounted ? "scale-100 translate-y-0" : "scale-[0.98] translate-y-2",
            ].join(" ")}
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
            role="document"
          >
            <div
              className={[
                "group bg-[var(--ig-panel)] rounded-[14px] overflow-hidden",
                "border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]",
              ].join(" ")}
            >
              <div className="relative" onClick={onStoryClick} role="presentation">
                <img
                  src={`/skills/${openId}-slide.png`}
                  alt={openId}
                  className="w-full h-auto select-none block"
                  draggable="false"
                />

                <div className="absolute inset-x-0 top-0 z-20">
                  <div className="absolute inset-0 h-[92px] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

                  <div className="relative px-4 pt-3">
                    <div className="flex gap-1">
                      {ids.map((id, i) => {
                        const filled = i < index ? 1 : i > index ? 0 : progress
                        return (
                          <div
                            key={id}
                            className="h-[3px] flex-1 rounded-full bg-white/25 overflow-hidden"
                          >
                            <div
                              className="h-full bg-white/95"
                              style={{ width: `${filled * 100}%` }}
                            />
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                          <span className="text-xs text-white/85">RC</span>
                        </div>
                        <div className="text-sm font-semibold text-white/95">
                          rotarucosmin
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          close()
                        }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>

                { }
                <div className="absolute inset-0 z-10 grid grid-cols-2">
                  <div className="cursor-pointer" />
                  <div className="cursor-pointer" />
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      goPrev()
                    }}
                    className="
                      absolute left-3 top-1/2 -translate-y-1/2 z-30
                      w-9 h-9 rounded-full
                      bg-black/35 hover:bg-black/55
                      text-white/90
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                    "
                    aria-label="Previous"
                    title="Previous"
                  >
                    <span className="text-lg leading-none">‹</span>
                  </button>
                )}

                {index < ids.length - 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      goNext()
                    }}
                    className="
                      absolute right-3 top-1/2 -translate-y-1/2 z-30
                      w-9 h-9 rounded-full
                      bg-black/35 hover:bg-black/55
                      text-white/90
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                    "
                    aria-label="Next"
                    title="Next"
                  >
                    <span className="text-lg leading-none">›</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-2 text-center text-xs text-white/40">
              ← → navigate · Esc close
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
