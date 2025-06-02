import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={project.articleLink}
      className="flex flex-col h-full bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 transition hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-300 duration-200 p-6"
      aria-label={`Open article page for ${project.title}`}
    >
      <div className="w-full h-40 flex items-center justify-center mb-6 rounded-2xl bg-gradient-to-tr from-blue-100 via-white to-pink-100 border border-blue-50 shadow-lg">
        <img
          src={project.thumbnail}
          alt={`Thumbnail for ${project.title}`}
          className="max-h-32 object-contain rounded-xl"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-2xl text-blue-900 mb-3">{project.title}</h2>
        <p className="text-gray-700 leading-relaxed">{project.shortDesc}</p>
      </div>
    </Link>
  );
}
