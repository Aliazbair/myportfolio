import styles from '../styles/skills.module.css'

const Skills = () => {
  return (
    <>
      <section>
        {/* <span className={styles.title}>Why Choose Me</span> */}
        <h2 className={styles.title}>My expertise Area</h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Frontend</h3>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Html/Css</span>
              <span className={styles.skillsNumber}>80%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsHtml}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Javascript</span>
              <span className={styles.skillsNumber}>80%</span>
              <span className={`${styles.skillsBar} ${styles.skillsJs}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>boostrap</span>
              <span className={styles.skillsNumber}>90%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsBoostrap}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Taiwlind</span>
              <span className={styles.skillsNumber}>60%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsTaiwlind}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Vuejs</span>
              <span className={styles.skillsNumber}>70%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsVue}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>React</span>
              <span className={styles.skillsNumber}>90%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsReact}`}></span>
            </div>
          </div>
          <div>
            <h3 className={styles.subtitle}>Backend</h3>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Php</span>
              <span className={styles.skillsNumber}>80%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsPhp}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Laravel</span>
              <span className={styles.skillsNumber}>70%</span>
              <span className={`${styles.skillsBar} ${styles.skillsJs}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>NodeJs</span>
              <span className={styles.skillsNumber}>60%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsNode}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Express</span>
              <span className={styles.skillsNumber}>90%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsPython}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>Mysql</span>
              <span className={styles.skillsNumber}>80%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsFirebase}`}></span>
            </div>

            <div className={styles.skillsData}>
              <span className={styles.skillsName}>MongoDB</span>
              <span className={styles.skillsNumber}>80%</span>
              <span
                className={`${styles.skillsBar} ${styles.skillsFirebase}`}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
