import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiMysql, SiJson, SiApollographql } from "react-icons/si"
import { MdStorage } from "react-icons/md"
import styles from "./Skills.module.scss"

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#f97316" },
  { name: "CSS3", icon: SiCss3, color: "#3b82f6" },
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "PHP", icon: SiPhp, color: "#6366f1" },
  { name: "Python", icon: SiPython, color: "#4ade80" },
  { name: "MySQL", icon: SiMysql, color: "#60a5fa" },
  { name: "SQL Server", icon: MdStorage, color: "#22d3ee" },
  { name: "JSON", icon: SiJson, color: "#f472b6" },
  { name: "API REST", icon: SiApollographql, color: "#a78bfa" },
  { name: "TypeScript", icon: SiJavascript, color: "#60a5fa" },
]

export default function Skills() {
  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.skillsOverlay}></div>
      <div className={styles.skillsAccent}></div>

      <div className={styles.skillsContent}>
        <h2 className={styles.skillsTitle}>
          Habilidades Técnicas
        </h2>

        <div className={styles.skillsGrid}>
          {skills.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              className={styles.skillItem}
              style={{ 
                animationDelay: `${index * 80}ms`,
                '--skill-color': color
              } as React.CSSProperties}
            >
              <div className={styles.skillIconWrapper}>
                <Icon
                  className={styles.skillIcon}
                  style={{ color }}
                />
                <div 
                  className={styles.skillIconGlow}
                  style={{ backgroundColor: color }}
                ></div>
              </div>

              <span className={styles.skillName}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

