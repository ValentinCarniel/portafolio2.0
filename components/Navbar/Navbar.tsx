"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { HiEnvelope } from "react-icons/hi2"
import { HiCheck } from "react-icons/hi2"
import styles from "./Navbar.module.scss"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCopyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const email = "josevalentincarniel@gmail.com"
    
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setOpen(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          Valentín Carniel
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          <svg
            className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`}
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

        <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          <Link
            href="#proyectos"
            className={styles.menuLink}
            onClick={() => setOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            href="#contacto"
            className={styles.menuLink}
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          <button
            onClick={handleCopyEmail}
            className={styles.menuButtonEmail}
          >
            {copied ? (
              <>
                <HiCheck className={styles.emailIcon} />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <HiEnvelope className={styles.emailIcon} />
                <span>Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

