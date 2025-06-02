import { useParams, Link } from 'react-router-dom';

const PROJECT_DATA = {
  frameworks: {
    title: "JavaScript Frameworks",
    description: "A responsive React + Vite e-commerce store using modern JS frameworks. This project demonstrates my ability to work with React components, routing, and dynamic product data.",
    image: "/frameworks.png",
    liveLink: "https://digishop-ecom-store.netlify.app/",
    github: "https://github.com/IT-Dah/ecom-store",
    reflection: "Improved accessibility, optimized images, and enhanced responsiveness across devices.",
  },
  semester: {
    title: "Semester Project 2",
    description: "A multi-page web application focusing on clean design and usability. This project demonstrates my approach to building accessible, user-friendly web apps using modern front-end tools.",
    image: "/semester-placeholder.png",
    liveLink: "",
    github: "https://github.com/IT-Dah/SemesterProject2",
    reflection: "Enhanced navigation and styling consistency, adjusted color contrast for accessibility.",
  },
  exam: {
    title: "Exam Project 2: Holidaze",
    description: "Holidaze is a booking site with user-friendly features and modern design. Built with accessibility, responsiveness, and clear user flows in mind.",
    image: "/exam.png",
    liveLink: "https://it-dah.github.io/holidaze/",
    github: "https://github.com/IT-Dah/holidaze",
    reflection: "Improved booking flow, accessibility, and UI bug fixes based on user testing.",
  },
};

export default function ProjectArticle() {
  const { id } = useParams();
  const project = PROJECT_DATA[id];

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-lg text-red-500">Project not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-300 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-blue-100">
        <Link to="/" className="text-blue-700 underline hover:text-blue-900 transition mb-6 inline-block">&larr; Back to home</Link>
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">{project.title}</h1>
        <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 border border-blue-50 shadow-lg bg-gradient-to-tr from-blue-100 via-white to-pink-100 flex items-center justify-center">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="max-h-52 object-contain"
          />
        </div>
        <p className="mb-6 text-gray-800 leading-relaxed">{project.description}</p>
        <div className="flex gap-6 mb-6">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-100 text-green-700 px-5 py-2 rounded-full hover:bg-green-200 transition underline"
            >
              Live Site
            </a>
          ) : (
            <span className="italic bg-gray-100 px-5 py-2 rounded-full text-gray-400">
              Live site unavailable
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-200 transition underline"
          >
            GitHub Repo
          </a>
        </div>

        <hr className="my-8 border-blue-200" />

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Reflections & Improvements</h2>
          <p className="text-gray-700 leading-relaxed">{project.reflection}</p>
        </section>
      </div>
    </div>
  );
}
