import { SiGithub } from "react-icons/si"
import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import styles from "./ProjectCard.module.scss"

type ProjectCardProps = {
  title: string
  description: string
  repoLink?: string
  demoLink?: string
}

export default function ProjectCard({ title, description, repoLink, demoLink }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          {title}
        </h3>

        <p className={styles.cardDescription}>
          {description}
        </p>
      </div>

      <div className={styles.cardActions}>
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
            aria-label="Ver repositorio en GitHub"
          >
            <SiGithub className={styles.buttonIcon} />
            <span>Repositorio</span>
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
            aria-label="Ver demo"
          >
            <span>Demo</span>
            <HiArrowTopRightOnSquare className={styles.buttonIcon} />
          </a>
        )}
      </div>
    </div>
  )
}

