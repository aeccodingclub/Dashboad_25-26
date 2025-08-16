import Layout from "../components/Layout"
import { Coffee, ArrowLeft, Zap } from "lucide-react"

const NotFound = () => {
  return (
    <Layout>
      <main className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-2xl">
          
          {/* Animated 404 */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold text-slate-300 dark:text-slate-700 select-none">
              404
            </h1>
            
            {/* Hamster in wheel animation */}
            <div className="flex justify-center items-center space-x-4 text-6xl">
              <div className="animate-spin">🐹</div>
              <div className="animate-pulse">⚙️</div>
            </div>
          </div>

          {/* Fun message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
              Oops! Looks like our coding hamster took a coffee break
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Don't worry though – our caffeinated dev team is frantically spinning their wheels to get this page up and running! 
              We're <span className="font-semibold text-slate-800 dark:text-slate-200">right on cue</span> ☕
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
            
            <a 
              href="/"
              className="inline-flex items-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Return Home</span>
              <Zap size={20} />
            </a>
          </div>

          {/* Status indicator */}
          <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm">
            <Coffee size={16} className="animate-bounce" />
            <span>Status: Hamster refueling...</span>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound
