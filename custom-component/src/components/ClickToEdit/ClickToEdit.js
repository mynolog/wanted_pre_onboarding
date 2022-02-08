import { useState } from 'react'
import styles from './ClickToEdit.module.css'

function ClickToEdit() {
  const [form, setForm] = useState({
    username: '이민호',
    age: '30',
  })

  const [submitForm, setSubmitForm] = useState({
    username: '이민호',
    age: 30,
  })

  const [isActive, setIsAcitve] = useState({
    username: false,
    age: false,
  })

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

  const onBlur = (event) => {
    const {
      target: { name, value },
    } = event
    switch (name) {
      case 'username':
        setIsAcitve({
          ...isActive,
          username: false,
        })
        setForm({
          ...form,
          username: value,
        })
        setSubmitForm({
          ...form,
          username: value,
        })
        break
      case 'age':
        setIsAcitve({
          ...isActive,
          age: false,
        })
        setForm({
          ...form,
          age: value,
        })
        setSubmitForm({
          ...form,
          age: value,
        })
        break
      default:
        return
    }
    setIsAcitve({
      username: false,
      age: false,
    })
  }

  const onDoubleClick = (event) => {
    const {
      target: { name, id },
    } = event
    if (typeof name !== 'undefined') {
      switch (name) {
        case 'username':
          setIsAcitve({
            ...isActive,
            username: !isActive.username,
          })
          break
        case 'age':
          setIsAcitve({
            ...isActive,
            age: !isActive.age,
          })
          break
        default:
          return
      }
    }
    switch (id) {
      case 'username':
        setIsAcitve({
          ...isActive,
          username: !isActive.username,
        })
        break
      case 'age':
        setIsAcitve({
          ...isActive,
          age: !isActive.age,
        })
        break
      default:
        return
    }
  }

  const IsActiveUsername = () => {
    return (
      <>
        <div
          className={`${styles.inputBlock} ${
            !isActive.username ? styles.active : ''
          }`}
        >
          <span className={styles.inputLabel}>이름</span>
          {isActive.username ? (
            <>
              <input
                name="username"
                value={form.username}
                onChange={onChange}
                onDoubleClick={onDoubleClick}
                onBlur={onBlur}
                autoFocus
              />
            </>
          ) : (
            <>
              <div
                id="username"
                value={form.username}
                onChange={onChange}
                onDoubleClick={onDoubleClick}
              >
                {form.username}
              </div>
            </>
          )}
        </div>
      </>
    )
  }
  const IsActiveAge = () => {
    return (
      <>
        <div
          className={`${styles.inputBlock} ${
            !isActive.username ? styles.active : ''
          }`}
        >
          <span className={styles.inputLabel}>나이</span>
          {isActive.age ? (
            <>
              <input
                name="age"
                value={form.age}
                onChange={onChange}
                onDoubleClick={onDoubleClick}
                onBlur={onBlur}
                autoFocus
              />
            </>
          ) : (
            <>
              <div
                id="age"
                value={form.age}
                onChange={onChange}
                onDoubleClick={onDoubleClick}
                className={styles.disabled}
              >
                {form.age}
              </div>
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <h2 className={styles.title}>ClickToEdit</h2>
      <div className={styles.clickToEditContainer}>
        <form>
          <IsActiveUsername />
          <IsActiveAge />
        </form>
        <div>
          이름 {submitForm.username} 나이 {submitForm.age}
        </div>
      </div>
    </>
  )
}

export default ClickToEdit
