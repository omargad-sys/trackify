import { OrbBackground } from './components/ui/orb-background'
import './App.css'

function App() {
  return (
    <div className="min-h-screen relative">
      <OrbBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trackify
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your gamified budget tracker
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Streak Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2">🔥</div>
              <h3 className="text-2xl font-bold mb-1">0 Days</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak</p>
            </div>
          </div>

          {/* Level Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-2xl font-bold mb-1">Level 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Budget Beginner</p>
            </div>
          </div>

          {/* Points Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2">💎</div>
              <h3 className="text-2xl font-bold mb-1">0 XP</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-8 max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
              Add Expense
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg">
              Set Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
