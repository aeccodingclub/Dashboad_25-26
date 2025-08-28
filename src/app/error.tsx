'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-8 max-w-lg">
        {/* Error icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
            <div className="absolute -top-1 -right-1 text-2xl animate-bounce">⚠️</div>
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-gray-600">
            Our code encountered an unexpected bug. Don't worry, our development team is already debugging this! 
            <span className="inline-block ml-1">🐛</span>
          </p>
          
          {/* Technical details (in development) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-gray-100 rounded-lg p-4 text-sm">
              <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                Technical Details (Dev Mode)
              </summary>
              <pre className="text-red-600 overflow-auto">
                {error.message || 'Unknown error occurred'}
              </pre>
            </details>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <RefreshCw size={20} />
            <span>Try Again</span>
          </button>
          
          <a
            href="/"
            className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Home size={20} />
            <span>Go Home</span>
          </a>
        </div>

        {/* Status message */}
        <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm">
          <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
          <span>Status: Debugging in progress</span>
        </div>
      </div>
    </div>
  )
}
