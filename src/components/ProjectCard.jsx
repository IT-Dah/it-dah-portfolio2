import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link
        to={project.articleLink}
        className="flex flex-col bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-transparent hover:border-blue-400 dark:hover:border-blue-400 transition transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl p-6 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label={`Open article page for ${project.title}`}
        tabIndex={0}
      >
        <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 flex items-center justify-center transition">
          <img
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
            className="w-full h-full object-cover object-top rounded-2xl"
            loading="lazy"
          />
        </div>
        <h2 className="font-semibold text-2xl text-gray-900 dark:text-white mb-3 transition">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.shortDesc}</p>
      </Link>
    </motion.div>
  )
}
