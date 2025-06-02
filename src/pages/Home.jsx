import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
  {
    id: 'frameworks',
    title: 'JavaScript Frameworks',
    shortDesc: 'A responsive React + Vite e-commerce store using modern JS frameworks.',
    thumbnail: '/frameworks.png',
    articleLink: '/project/frameworks',
  },
  {
    id: 'semester',
    title: 'Semester Project 2',
    shortDesc: 'A multi-page web application focusing on clean design and usability.',
    thumbnail: '/semester-placeholder.png',
    articleLink: '/project/semester',
  },
  {
    id: 'exam',
    title: 'Exam Project 2: Holidaze',
    shortDesc: 'A booking site for Holidaze, with user-friendly features and modern design.',
    thumbnail: '/exam.png',
    articleLink: '/project/exam',
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-300 py-16 px-6">
      <header className="max-w-4xl mx-auto mb-14 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">
          IT-Dah-Portfolio2
        </h1>
        <p className="text-xl text-white/80">
          Front-end development projects by Therese Dahlgren
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
