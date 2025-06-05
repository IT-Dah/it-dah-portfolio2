import { useParams, Link } from 'react-router-dom';
import PROJECTS from '../data/projects';

export default function ProjectArticle() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <p className="text-lg text-red-500">Project not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-blue-100 dark:border-gray-700">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-300 dark:bg-blue-800 text-blue-900 dark:text-white font-semibold shadow hover:bg-blue-400 dark:hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-6">{project.title}</h1>
        <div className="w-full h-72 rounded-2xl overflow-hidden mb-8 border border-blue-50 dark:border-gray-700 shadow-lg bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 flex items-center justify-center">
          <img
            src={project.articleImage}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover object-top rounded-2xl"
            loading="lazy"
          />
        </div>
        <p className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">{project.description || project.shortDesc}</p>
        <div className="flex gap-6 mb-6">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live site for ${project.title} (opens in new tab)`}
              className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 px-5 py-2 rounded-full hover:bg-green-200 dark:hover:bg-green-700 transition underline focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Live Site
            </a>
          ) : (
            <span className="italic bg-gray-100 dark:bg-gray-800 px-5 py-2 rounded-full text-gray-400 dark:text-gray-500">
              Live site unavailable
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open GitHub repository for ${project.title} (opens in new tab)`}
            className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-5 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            GitHub Repo
          </a>
        </div>
        <hr className="my-8 border-blue-200 dark:border-gray-700" />
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Reflections & Improvements</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.reflection}</p>
        </section>
      </div>
    </div>
  );
}
