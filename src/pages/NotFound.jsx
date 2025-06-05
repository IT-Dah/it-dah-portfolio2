import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6">
      <h1 className="text-6xl font-extrabold text-blue-900 dark:text-white mb-4">404</h1>
      <p className="text-2xl text-gray-800 dark:text-gray-300 mb-6">
        Oops! That page could not be found.
      </p>
      <Link
        to="/"
        aria-label="Back to homepage"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-300 dark:bg-blue-800 text-blue-900 dark:text-white font-semibold shadow hover:bg-blue-400 dark:hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <HomeIcon className="w-5 h-5" />
        Back to home
      </Link>
    </div>
  )
}
