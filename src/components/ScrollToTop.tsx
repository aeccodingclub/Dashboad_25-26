'use client'

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.25) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button 
      onClick={() => {
        window.scrollTo({
          top: 0
        })}
      }
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:opacity-80 ${
        isVisible ? 'opacity-60' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="text-slate-800 dark:text-slate-200" />
    </button>
  )
}

export default ScrollToTop
