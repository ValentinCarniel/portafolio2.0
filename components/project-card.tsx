type ProjectCardProps = {
  title: string
  description: string
  repoLink?: string
  demoLink?: string
}

export default function ProjectCard({ title, description, repoLink, demoLink }: ProjectCardProps) {
  return (
    <div className="group bg-gradient-to-br from-gray-900/90 via-red-900/20 to-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col justify-between hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/5 relative overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-400 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 flex gap-3 relative z-10">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 border border-red-500/30"
          >
            Repositorio
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30 border border-gray-500/30"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
