import styles from './try-for-free.module.scss'

export const TryForFree = () => {
    return(
        <div className={styles.try_container}>
            <div className={styles.container_input}>
                <input type="text" placeholder="Your email address"/>
            </div>
            <div className={styles.container_button}>
                <button>Try it for free</button>
            </div>
        </div>
    )
}