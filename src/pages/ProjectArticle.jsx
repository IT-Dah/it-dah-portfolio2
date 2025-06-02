import { useParams, Link } from 'react-router-dom'

const projectData = {
  frameworks: {
    title: "JavaScript Frameworks",
    description: "A responsive React + Vite e-commerce store using modern JS frameworks. This project demonstrates my ability to work with React components, routing, and dynamic product data.",
    image: "/frameworks.png",
    liveLink: "https://digishop-ecom-store.netlify.app/",
    github: "https://github.com/IT-Dah/ecom-store"
  },
  semester: {
    title: "Semester Project 2",
    description: "A multi-page web application focusing on clean design and usability. This project demonstrates my approach to building accessible, user-friendly web apps using modern front-end tools.",
    image: "/semester-placeholder.png",
    liveLink: "", // No live site yet - leave blank!
    github: "https://github.com/IT-Dah/SemesterProject2"
  },
  exam: {
    title: "Exam Project 2: Holidaze",
    description: "Holidaze is a booking site with user-friendly features and modern design. Built with accessibility, responsiveness, and clear user flows in mind.",
    image: "/exam.png",
    liveLink: "https://it-dah.github.io/holidaze/",
    github: "https://github.com/IT-Dah/holidaze"
  }
}

export default function ProjectArticle() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="text-blue-500">&larr; Back to home</Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-2" />
      <p className="mb-4">{project.description}</p>
      <div className="flex gap-4 mb-4">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline"
          >
            Live Site
          </a>
        ) : (
          <span className="text-gray-400 italic">Live site unavailable</span>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 underline"
        >
          GitHub Repo
        </a>
      </div>
      {}
    </div>
  )
}
