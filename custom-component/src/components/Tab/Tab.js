import { useState } from 'react'
import { tabContents } from './tabContents'
import styles from './Tab.module.css'

function Tab() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onChangeTab = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <h2 className={styles.title}>Tab</h2>
      <div className={styles.tabContainer}>
        <div className={styles.tabNavigator}>
          <ul className={styles.tabNavList}>
            {tabContents.map((tabContent, index) => (
              <li
                className={`${styles.tabNavItem} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => onChangeTab(index)}
                key={tabContent.id}
              >
                {tabContent.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.tabContentBox}>
          <div>{tabContents[currentIndex].content}</div>
        </div>
      </div>
    </>
  )
}

export default Tab
