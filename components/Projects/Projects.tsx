import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "./Projects.module.scss"

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
    <section id="proyectos" className={styles.projects}>
      <div className={styles.projectsOverlay}></div>
      <div className={styles.projectsAccent}></div>

      <div className={styles.projectsContent}>
        <h2 className={styles.projectsTitle}>
          Mis Proyectos
        </h2>

        <div className={styles.projectsGrid}>
          {proyectos.map((proyecto, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
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

