import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './how-find.module.scss'

export const HowToFind = ({ title, content, icon, backcolor, textcolor }) => {
    return(
        <div className={styles.container_card_find}>
            <div className={styles.container_icon} style={{ backgroundColor: backcolor, color: textcolor }}>
                {icon}
            </div>
            <h3> {title} </h3>
            <p>
                {content}
            </p>
        </div>
    )
}
