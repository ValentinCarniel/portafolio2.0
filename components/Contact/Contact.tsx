import { SiGithub, SiLinkedin } from "react-icons/si"
import { HiEnvelope } from "react-icons/hi2"
import styles from "./Contact.module.scss"

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.contactOverlay}></div>
      <div className={styles.contactAccent}></div>

      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>
          Redes & Contacto
        </h2>

        <div className={styles.contactGrid}>
          <a
            href="https://github.com/ValentinCarniel"
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}
            style={{ animationDelay: "100ms" }}
          >
            <div className={styles.contactIcon}>
              <SiGithub className={styles.contactIconSvg} />
            </div>
            <span className={styles.contactLabel}>
              GitHub: ValentinCarniel
            </span>
          </a>

          <a
            href="https://linkedin.com/in/valentin-carniel-139043300"
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}
            style={{ animationDelay: "200ms" }}
          >
            <div className={`${styles.contactIcon} ${styles.contactIconLinkedIn}`}>
              <SiLinkedin className={styles.contactIconSvg} />
            </div>
            <span className={styles.contactLabel}>
              LinkedIn: valentin-carniel
            </span>
          </a>

          <a
            href="mailto:josevalentincarniel@gmail.com"
            className={styles.contactCard}
            style={{ animationDelay: "300ms" }}
          >
            <div className={`${styles.contactIcon} ${styles.contactIconEmail}`}>
              <HiEnvelope className={styles.contactIconSvg} />
            </div>
            <span className={styles.contactLabel}>
              josevalentincarniel@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

