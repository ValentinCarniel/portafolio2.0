"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/95 via-red-900/95 to-gray-900/95 backdrop-blur-md border-b border-red-500/20 text-white p-4 flex items-center justify-between shadow-lg animate-slideDown">
      <div className="text-xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-glow">
        Valentín Carniel
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        className={`${open ? "block animate-fadeIn" : "hidden"} sm:flex sm:items-center sm:gap-8 absolute sm:relative top-full sm:top-auto left-0 right-0 sm:left-auto sm:right-auto bg-black/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-0 border-t sm:border-t-0 border-red-500/20`}
      >
        <Link
          href="#proyectos"
          className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-red-500/20 hover:to-gray-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
        >
          Proyectos
        </Link>
        <Link
          href="#contacto"
          className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-red-500/20 hover:to-gray-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
        >
          Contacto
        </Link>
        <a
          href="mailto:josevalentincarniel@gmail.com"
          className="block px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 text-center"
        >
          Email
        </a>
      </div>
    </nav>
  )
}
