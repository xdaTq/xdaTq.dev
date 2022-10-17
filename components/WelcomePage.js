import styles from '../styles/WelcomePage.module.css'

export default function WelcomePage() {
    return (
        <div className={`${styles.welcomePage}`}>
          <div className={`${styles.typewriter} ${styles.welcomeText}`}>
            <h1>
              <span className={styles.welcome}>Welcome</span>
              <span>,</span>
              <span>to my Portfolio.</span>
            </h1>
            <p>Hey, im <span className={styles.nameSecondary}>xdaTq</span> <br></br> and you just found my personal space on the internet.</p>
          </div>
        </div>
    )
}