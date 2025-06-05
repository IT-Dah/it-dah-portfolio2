import ProjectCard from '../components/ProjectCard'
import PROJECTS from '../data/projects'
import { ThemeContext } from '../main'
import { useContext } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 relative">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="absolute left-[-10000px] focus:left-4 focus:top-4 bg-white dark:bg-gray-800 text-blue-900 dark:text-white font-semibold py-2 px-4 rounded-lg z-50 shadow transition"
      >
        Skip to main content
      </a>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
        className="absolute right-6 top-6 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-gray-800" />}
      </button>
      <header className="max-w-4xl mx-auto mb-14 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-md mb-2">
          IT-Dah-Portfolio2
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Front-end projects by Therese Dahlgren
        </p>
      </header>
      <main id="main-content" className="max-w-7xl mx-auto">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  )
}
