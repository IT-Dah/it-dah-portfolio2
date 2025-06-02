import ProjectCard from '../components/ProjectCard';
import PROJECTS from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-200 py-20 px-6">
      <header className="max-w-4xl mx-auto mb-14 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-2">
          IT-Dah-Portfolio2
        </h1>
        <p className="text-lg text-gray-700">
          Front-end projects by Therese Dahlgren
        </p>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
