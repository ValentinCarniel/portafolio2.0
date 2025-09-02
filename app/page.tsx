import Navbar from "../components/navbar"
import About from "../components/about"
import Skills from "../components/skills"
import Tools from "../components/tools"
import Projects from "../components/projects"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-sans pt-8 pb-8 px-8 flex flex-col items-center gap-8">
        <About />
        <Skills />
        <Tools />
        <Projects />

        <section
          id="contacto"
          className="w-full max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900/90 via-red-900/20 to-black/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-shimmer"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
              Redes & Contacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://github.com/ValentinCarniel"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                  <span className="text-xl font-bold text-white">GH</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                  GitHub: ValentinCarniel
                </span>
              </a>

              <a
                href="https://linkedin.com/in/valentin-carniel-139043300"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-xl font-bold text-white">in</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                  LinkedIn: valentin-carniel
                </span>
              </a>

              <a
                href="mailto:josevalentincarniel@gmail.com"
                className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                  <span className="text-xl font-bold text-white">@</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                  josevalentincarniel@gmail.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
