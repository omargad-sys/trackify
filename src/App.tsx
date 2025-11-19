import { OrbBackground } from './components/ui/orb-background'
import { useState } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
      <OrbBackground />

      {/* Custom Cat Cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="text-3xl animate-bounce-subtle">🐱</div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Trackify
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
              Budget tracking, reimagined.
            </p>
          </div>

          {/* Stats Section - Floating Elements */}
          <div className="w-full max-w-6xl mx-auto mb-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
              {/* Streak */}
              <div className="group cursor-pointer animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-center transition-all duration-500 hover:scale-110">
                  <div className="text-8xl mb-4 group-hover:scale-125 transition-transform duration-300">🔥</div>
                  <div className="text-6xl font-bold mb-2 bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">0</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-light">day streak</p>
                </div>
              </div>

              {/* Level */}
              <div className="group cursor-pointer animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="text-center transition-all duration-500 hover:scale-110">
                  <div className="text-8xl mb-4 group-hover:scale-125 transition-transform duration-300">⭐</div>
                  <div className="text-6xl font-bold mb-2 bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent">1</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-light">beginner</p>
                </div>
              </div>

              {/* XP */}
              <div className="group cursor-pointer animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="text-center transition-all duration-500 hover:scale-110">
                  <div className="text-8xl mb-4 group-hover:scale-125 transition-transform duration-300">💎</div>
                  <div className="text-6xl font-bold mb-2 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">0</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-light">experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
            <button className="group relative px-12 py-6 text-xl font-semibold text-white overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-110"></div>
              <span className="relative z-10 flex items-center gap-3">
                <span>Add Expense</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button className="group relative px-12 py-6 text-xl font-semibold text-gray-900 dark:text-white overflow-hidden rounded-full border-2 border-gray-900 dark:border-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
              <span className="relative z-10 flex items-center gap-3">
                <span>Set Budget</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  )
}

export default App
