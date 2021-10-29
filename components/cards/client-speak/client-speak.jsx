import Image from 'next/image'
import styles from './client-speak.module.scss'

export const ClientSpeak = ({ name, skill, title }) =>{
    return(
        <div className={styles.container_client_speak}>
            <div className={styles.client_speak}>
                <h3>{title}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quidem autem quibusdam provident debitis eveniet officiis sed esse.
                </p>
            </div>
            <div className={styles.container_image}>
                <Image
                    src="/favicon.ico"
                    width={40}
                    height={40}
                />
                <h5>{ name }</h5>
                <p>{ skill }</p>
            </div>
        </div>
    )
}