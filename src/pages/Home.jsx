import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 'frameworks',
    title: 'JavaScript Frameworks',
    shortDesc: 'A responsive React + Vite e-commerce store using modern JS frameworks.',
    thumbnail: '/frameworks.png',
    articleLink: '/project/frameworks'
  },
  {
    id: 'semester',
    title: 'Semester Project 2',
    shortDesc: 'A multi-page web application focusing on clean design and usability.',
    thumbnail: '/semester-placeholder.png',
    articleLink: '/project/semester'
  },
  {
    id: 'exam',
    title: 'Exam Project 2: Holidaze',
    shortDesc: 'A booking site for Holidaze, with user-friendly features and modern design.',
    thumbnail: '/exam.png',
    articleLink: '/project/exam'
  }
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">IT-Dah-Portfolio2</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
