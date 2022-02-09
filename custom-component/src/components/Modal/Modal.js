import { useState } from 'react'
import styles from './Modal.module.css'

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isOpen ? (
        <div className={styles.modalOpenContainer}>
          <h2 className={styles.title}>Modal</h2>
          <div className={styles.modalBox}>
            <button onClick={onToggleModal} className={styles.modalCloseButton}>
              X
            </button>
            <span className={styles.modalContent}>Hello, CodeStates</span>
          </div>
        </div>
      ) : (
        <>
          <h2 className={styles.title}>Modal</h2>
          <div className={styles.modalContainer}>
            <div onClick={onToggleModal} className={styles.modalButton}>
              Open Modal
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal
