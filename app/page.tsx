import Navbar from "../components/Navbar/Navbar"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Tools from "../components/Tools/Tools"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white font-sans pt-8 pb-8 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-4 sm:gap-6 md:gap-8" style={{ backgroundColor: 'var(--bg-color)' }}>
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
