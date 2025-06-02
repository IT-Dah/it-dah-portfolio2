import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={project.articleLink} className="block bg-white rounded-xl shadow-md hover:scale-105 transition p-4">
      <img src={project.thumbnail} alt={project.title} className="w-full h-32 object-cover rounded-xl mb-2" />
      <h2 className="font-bold text-lg mb-1">{project.title}</h2>
      <p className="text-gray-600">{project.shortDesc}</p>
    </Link>
  )
}
