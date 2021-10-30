import { BsFillBagXFill } from 'react-icons/bs'
import styles from './viktor.module.scss'

export const ViktorCard = () => {
    return(
        <div className={styles.container_card_viktor}>
            <div className={styles.section_profil}>
                <div className={styles.profil_card}>
                    CM
                </div>
                <div className={styles.title_person}>
                    <h4>Claude Motoba</h4>
                    <p>Front-End Developer</p>
                </div>
            </div>
            <div className={styles.container_more_information}>
                <h6>More informations</h6>
                <p>
                    19 May 1999
                </p>
                <p>
                    <BsFillBagXFill/> Profesional Accoutant
                </p>
            </div>
        </div>
    )
}