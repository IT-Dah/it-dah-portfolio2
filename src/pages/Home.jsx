import ProjectCard from '../components/ProjectCard';
import PROJECTS from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="absolute left-[-10000px] focus:left-4 focus:top-4 bg-white dark:bg-gray-800 text-blue-900 dark:text-white font-semibold py-2 px-4 rounded-lg z-50 shadow transition"
      >
        Skip to main content
      </a>
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
  );
}
