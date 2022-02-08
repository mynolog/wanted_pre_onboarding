import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/">
              Toggle
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/auto-complete">
              Auto Complete
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/modal">
              Modal
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/tab">
              Tab
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/tag">
              Tag
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink className={styles.headerLink} to="/click-to-edit">
              Click To Edit
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
