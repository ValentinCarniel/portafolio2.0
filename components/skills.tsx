import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiMysql, SiJson, SiApollographql } from "react-icons/si"
import { MdStorage } from "react-icons/md"

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Python", icon: SiPython, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "SQL Server", icon: MdStorage, color: "text-cyan-400" },
  { name: "JSON", icon: SiJson, color: "text-pink-400" },
  { name: "API REST", icon: SiApollographql, color: "text-purple-400" },
  { name: "TypeScript", icon: SiJavascript, color: "text-blue-400" },
]

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="w-full max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900/90 via-red-900/20 to-black/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden group animate-fade-in-up"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-shimmer"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              className="group/skill flex flex-col items-center gap-3 cursor-pointer p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <Icon
                  className={`${color} text-5xl transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:drop-shadow-lg filter group-hover/skill:brightness-125`}
                />
                <div
                  className={`absolute inset-0 ${color} opacity-0 group-hover/skill:opacity-30 blur-xl transition-opacity duration-300`}
                >
                  <Icon className="text-5xl" />
                </div>
              </div>

              <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
