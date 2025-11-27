import styles from "./Footer.module.scss"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {currentYear} Valentín Carniel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

