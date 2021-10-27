import Image from 'next/image'

import styles from './how-find.module.scss'

export const HowToFind = ({ title, content, url }) => {
    return(
        <div className={styles.container_card_find}>
            <div>
                <Image
                    src={url}
                    layout="fill"
                />
            </div>
            <h3> {title} </h3>
            <p>
                {content}
            </p>
        </div>
    )
}
