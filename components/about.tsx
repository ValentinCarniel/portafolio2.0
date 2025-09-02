export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-800/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full blur-sm opacity-75 animate-pulse"></div>
        <img
          src="/valen.png"
          alt="Foto de perfil"
          className="relative w-36 h-36 rounded-full object-cover border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-2"
        />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-red-600 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 flex-1">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-red-100 to-gray-100 bg-clip-text text-transparent mb-4 animate-fade-in">
          ¡Hola! Soy Valentín Carniel
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-6 animate-expand"></div>

        <p className="text-gray-300 leading-relaxed text-lg animate-slide-up">
          Soy Jose Valentín Carniel, un <span className="text-red-400 font-semibold">programador backend junior</span>{" "}
          apasionado por las APIs y bases de datos. Me gusta trabajar con{" "}
          <span className="text-yellow-400 font-medium">JavaScript</span>,{" "}
          <span className="text-green-400 font-medium">Python</span>,
          <span className="text-red-400 font-medium"> C#</span>, <span className="text-red-500 font-medium">.NET</span>{" "}
          y <span className="text-gray-400 font-medium">PHP</span>, siempre buscando aprender y mejorar en el desarrollo
          de soluciones robustas y eficientes.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Disponible para proyectos</span>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-red-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-gray-400/30 rounded-full animate-bounce-slow"></div>
    </section>
  )
}
