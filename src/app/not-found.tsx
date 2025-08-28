'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-8 max-w-2xl">
        
        {/* 404 Display */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-300 select-none">
            404
          </h1>
          
          {/* Subtle animation */}
          <div className="flex justify-center items-center space-x-3 text-4xl">
            <div className="animate-pulse">🔍</div>
            <div className="animate-bounce">📄</div>
            <div className="animate-pulse">❓</div>
          </div>
        </div>

        {/* Professional but friendly message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Our developers are constantly refactoring and improving the site.
            <span className="inline-block ml-2">⚡</span>
          </p>
          
          <p className="text-base text-gray-500">
            Error 404: Resource not found in current directory tree
          </p>
        </div>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t pt-8">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/events" className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">
              Events
            </Link>
            <Link href="/portal" className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">
              Portal
            </Link>
            <Link href="#projects" className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">
              Projects
            </Link>
            <Link href="#team" className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">
              Team
            </Link>
          </div>
        </div>

        {/* Subtle status indicator */}
        <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
          <Search size={16} />
          <span>Status: Page not in repository</span>
        </div>
      </div>
    </div>
  )
}

export default NotFound
