import { NavLink } from 'react-router-dom'
import { navList } from './navList'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          {navList.map((nav, index) => (
            <li className={styles.headerListItem} key={index}>
              <NavLink className={styles.headerLink} to={nav.url}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Header
