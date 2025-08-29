'use client'

import { ArrowRight, UserPlus } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove)
      return () => heroSection.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 overflow-hidden"
    >
      {/* Mouse glow effect */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("/bg/gamer-bg-1.jpeg")',
          filter: 'brightness(0.3) contrast(0.8)'
        }}
      />

      {/* Background pattern that glows up with mouse movement */}
      <div className="absolute inset-0">
        {/* Base grid pattern with very low opacity */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.9'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Grid pattern with mouse reveal effect */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.9'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 70%)`,
            WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 70%)`,
            opacity: 0.6
          }}
        />
        
        {/* Additional mouse lighting effect for the grid */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center pt-20 pb-16">
        <div className="text-center space-y-8">
          
          {/* Logo */}
          <div className="mb-8 relative">
            <div 
              className="absolute inset-0 transition-all duration-300 ease-out opacity-50"
              style={{
                background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 70%)`,
                filter: 'blur(30px)',
              }}
            />
            <img
              src="/logo.svg" 
              alt="AEC Coding Club Logo" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 mx-auto drop-shadow-2xl relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Animated heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative font-mono">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  &lt;AEC Coding Club /&gt;
                </span>
                <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  &lt;AEC Coding Club /&gt;
                </span>
              </span>
            </h1>
            
            {/* Glassmorphic card with tagline, description and CTAs */}
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10" />
              <div className="relative py-6 px-4 sm:py-8 sm:px-8 space-y-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                  Dream. Craft. Inspire.
                  <br />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    Turning ideas into code into realities
                  </span>
                </p>
                
                {/* CTA Buttons inside card */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="w-full sm:w-64 md:w-72 group relative cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center">
                      Enter Portal
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  <a href="https://forms.gle/MSBW2LNa5H6aCwcs6/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64 md:w-72">
                    <button
                      className="w-full group relative border-2 cursor-pointer border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 dark:bg-black/10"
                    >
                      <span className="relative flex items-center justify-center">
                        Join Us
                        <UserPlus className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
