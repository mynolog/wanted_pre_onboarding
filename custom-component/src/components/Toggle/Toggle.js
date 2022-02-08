import { useState } from 'react'
import styles from './Toggle.module.css'

function Toggle() {
  const [toggle, setToggle] = useState(false)

  const onToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <h2 className={styles.title}>Toggle</h2>
      <div className={styles.toggleContainer}>
        <div
          onClick={onToggle}
          className={`${styles.toggleBody} ${toggle ? styles.active : ''}`}
        >
          <div
            className={`${styles.toggleButton} ${toggle ? styles.active : ''}`}
          ></div>
        </div>
        <div>Toggle Switch {!toggle ? 'OFF' : 'ON'}</div>
      </div>
    </>
  )
}

export default Toggle
