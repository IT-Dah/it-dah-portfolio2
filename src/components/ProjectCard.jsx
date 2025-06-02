import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={project.articleLink}
      className="flex flex-col bg-white rounded-3xl shadow-lg border border-transparent hover:border-blue-200 transition transform hover:scale-105 hover:shadow-2xl p-6"
      aria-label={`Open article page for ${project.title}`}
    >
      <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center">
        <img
          src={project.thumbnail}
          alt={`Thumbnail for ${project.title}`}
          className="w-full h-full object-cover object-top rounded-2xl"
          loading="lazy"
        />
      </div>
      <h2 className="font-semibold text-2xl text-gray-900 mb-3">{project.title}</h2>
      <p className="text-gray-700 leading-relaxed">{project.shortDesc}</p>
    </Link>
  );
}
