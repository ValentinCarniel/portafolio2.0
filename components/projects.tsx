import ProjectCard from "./project-card"

export default function Projects() {
  const proyectos = [
    {
      title: "Tutorías App",
      description: "Una app para gestionar tutorías, con gestión de usuarios y sesiones.",
      repoLink: "https://github.com/ValentinCarniel/Tutorias_app",
      demoLink: "https://tutorias-app-demo.vercel.app",
    },
    {
      title: "Proyecto Tareas",
      description: "App web con FastAPI y SQLite para gestión de tareas, con login y registro.",
      repoLink: "https://github.com/ValentinCarniel/proyecto_tareas",
      demoLink: "https://proyectotareas.vercel.app/",
    },
    {
      title: "Chatbot AI",
      description: "Demo de un chatbot con FastAPI y OpenAI GPT, frontend interactivo.",
      repoLink: "https://github.com/ValentinCarniel/Chatbot-Ai",
      demoLink: "https://ValentinCarniel.github.io/Chatbot-Ai/",
    },
  ]

  return (
    <section
      id="proyectos"
      className="w-full max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900/90 via-red-900/20 to-black/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden animate-fade-in-up"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-shimmer"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Mis Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
              <ProjectCard
                title={proyecto.title}
                description={proyecto.description}
                repoLink={proyecto.repoLink}
                demoLink={proyecto.demoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
