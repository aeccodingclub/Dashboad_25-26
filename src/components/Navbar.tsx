'use client'

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { type BaseProps } from "@/lib/types"
import { usePathname } from "next/navigation"

const Navbar = ({ className }: BaseProps) => {
  const [hydrated, setHydrated] = useState(false)
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
    const [showNav, setShowNav] = useState(() => {
    if (typeof window !== "undefined") {
      // hidden if we're at top of landing
      if (window.location.pathname === "/" && window.scrollY < 200) {
        return false
      }
    }
    return true // visible everywhere else
  })

  useEffect(() => {
    if (pathname !== "/") {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.7);
    };

    // run once on mount in case user reloads mid-scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setHydrated(true)
  }, [])

  const leftNavItems = [
    { name: 'Home', href: '/#' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/core-team' }
  ]

  const rightNavItems = [
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  if (!hydrated) {
    return null
  }

  // ⬇️ only render when showNav is true
  if (!showNav) return null;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300 ${className || ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left Navigation */}
            <div className="hidden lg:flex space-x-16">
              {leftNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <img
                src={'logo.svg'}
                alt="Coding Club Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex space-x-16">
              {rightNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-white/20 dark:border-white/10 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
