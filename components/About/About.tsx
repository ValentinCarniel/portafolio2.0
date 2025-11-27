import styles from "./About.module.scss"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageGlow}></div>
        <img
          src="/valen2.jpg"
          alt="Foto de perfil"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroLine1}>Hola,</span>
          <span className={styles.heroLine2}>Soy Valentín</span>
        </h1>
        <p className={styles.heroSubtitle}>Backend Developer</p>

        <div className={styles.divider}></div>

        <p className={styles.description}>
          Desarrollador backend especializado en APIs y bases de datos. <br />
          Trabajo con tecnologías modernas como{" "}
          <span className={styles.tech}>JavaScript</span>,{" "}
          <span className={styles.tech}>Python</span>,{" "}
          <span className={styles.tech}>C#</span>,{" "}
          <span className={styles.tech}>.NET</span>{" "}
          y <span className={styles.tech}>PHP</span>, 
          enfocándome en crear soluciones escalables y eficientes.
        </p>

        <div className={styles.status}>
          <div className={styles.statusIndicator}></div>
          <span className={styles.statusText}>Disponible para proyectos</span>
        </div>
      </div>
    </section>
  )
}

