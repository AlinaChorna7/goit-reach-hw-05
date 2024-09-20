import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation(){
    return(
       <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/movies" className={styles.navLink}>Movies</Link>
                </li>
            </ul>
        </nav>
)
}
