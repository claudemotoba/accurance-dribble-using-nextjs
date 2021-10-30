import Link from 'next/link'
import styles from './header.module.scss';

export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Accurance</h1>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link href="#">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Features</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Princing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Testimonials</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Help</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.signin_signup}>
                <div>
                    <button className={styles.btn_sign_in}>Sign in</button>
                </div>
                <div>
                    <button className={styles.btn_sign_up}>Sign up</button>
                </div>
            </div>
        </header>
    )
}