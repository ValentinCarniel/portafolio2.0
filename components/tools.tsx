import { SiGit, SiGithub, SiPostman } from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi"

const tools = [
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-400" },
]

export default function Tools() {
  return (
    <section
      id="herramientas"
      className="w-full max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900/90 via-red-900/20 to-black/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden group animate-fade-in-up"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-shimmer"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Herramientas de Desarrollo
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {tools.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              className="group/tool flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-4">
                <Icon
                  className={`${color} text-6xl transition-all duration-300 group-hover/tool:scale-125 group-hover/tool:drop-shadow-lg filter group-hover/tool:brightness-125`}
                />
                <div
                  className={`absolute inset-0 ${color} opacity-0 group-hover/tool:opacity-30 blur-xl transition-opacity duration-300`}
                >
                  <Icon className="text-6xl" />
                </div>
              </div>

              <span className="text-sm font-medium text-gray-300 group-hover/tool:text-white transition-colors duration-300 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
