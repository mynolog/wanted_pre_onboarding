import { useState } from 'react'
import styles from './ClickToEdit.module.css'

function ClickToEdit() {
  const [form, setForm] = useState({
    username: '이민호',
    age: '32',
  })
  const [isActive, setIsAcitve] = useState(false)

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    switch (name) {
      case 'username':
        setForm({
          ...form,
          username: value,
        })
        break
      case 'age':
        setForm({
          ...form,
          age: value,
        })
        break
      default:
        return
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h2 className={styles.title}>ClickToEdit</h2>
      <div className={styles.clickToEditContainer}>
        <form>
          {isActive ? (
            <>
              <div className={`${styles.inputBlock} ${styles.active}`}>
                <span>이름</span>
                <input
                  className={styles.active}
                  name="username"
                  placeholder="이름"
                  value={form.username}
                  onChange={onChange}
                />
              </div>
              <div className={`${styles.inputBlock} ${styles.active}`}>
                <span>나이</span>
                <input
                  className={styles.active}
                  name="age"
                  placeholder="나이"
                  value={form.age}
                  onChange={onChange}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.inputBlock}>
                <span>이름</span>
                <div className={styles.disabled} onChange={onChange}>
                  {form.username}
                </div>
              </div>
              <div className={styles.inputBlock}>
                <span>나이</span>
                <div className={styles.disabled} onChange={onChange}>
                  {form.age}
                </div>
              </div>
            </>
          )}
        </form>
        <div>
          이름 {form.username} 나이 {form.age}
        </div>
      </div>
    </>
  )
}

export default ClickToEdit
