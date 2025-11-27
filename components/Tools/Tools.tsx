import { SiGit, SiGithub, SiPostman } from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi"
import styles from "./Tools.module.scss"

const tools = [
  { name: "Git", icon: SiGit, color: "#f97316" },
  { name: "GitHub", icon: SiGithub, color: "#d1d5db" },
  { name: "Postman", icon: SiPostman, color: "#fb923c" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "#60a5fa" },
]

export default function Tools() {
  return (
    <section id="herramientas" className={styles.tools}>
      <div className={styles.toolsOverlay}></div>
      <div className={styles.toolsAccent}></div>

      <div className={styles.toolsContent}>
        <h2 className={styles.toolsTitle}>
          Herramientas de Desarrollo
        </h2>

        <div className={styles.toolsGrid}>
          {tools.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              className={styles.toolItem}
              style={{ 
                animationDelay: `${index * 120}ms`,
                '--tool-color': color
              } as React.CSSProperties}
            >
              <div className={styles.toolIconWrapper}>
                <Icon
                  className={styles.toolIcon}
                  style={{ color }}
                />
                <div 
                  className={styles.toolIconGlow}
                  style={{ backgroundColor: color }}
                ></div>
              </div>

              <span className={styles.toolName}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

