import Link from 'next/link'

import styles from './footer.module.scss'

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div>
                Assurance logo
            </div>
            <div>
                <h5>Product</h5>
                <ul>
                    <li>
                        <Link href="#">
                            <a>Download</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Pricing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Locations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Server</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Countries</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h5>Engage</h5>
                <ul>
                    <li>
                        <Link href="#">
                            <a>Accurance ?</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Tutorials</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Terms of Service</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h5>Earn Money</h5>
                <ul>
                    <li>
                        <Link href="#">
                            <a>Affiliate</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a> Become Partner</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}