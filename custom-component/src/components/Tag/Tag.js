import { useState, useRef } from 'react'
import TagList from './TagList'
import styles from './Tag.module.css'

function Tag() {
  const [tag, setTag] = useState('')
  const [tagList, setTagList] = useState([])
  const [isFocus, setIsFocus] = useState(false)

  const tagInput = useRef()

  const onClickBox = () => {
    setIsFocus(true)
    tagInput.current.focus()
  }
  const onBlur = () => {
    setIsFocus(false)
  }
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setTag(value)
  }
  const onSubmit = (event) => {
    if (event.key === 'Enter' && tag.length > 0) {
      let nextId = tagList.length
      const newTagItem = {
        id: nextId,
        text: tag,
      }
      nextId += 1
      setTagList([...tagList, newTagItem])
      setTag('')
    }
  }
  const onDelete = (id) => {
    setTagList(tagList.filter((item) => item.id !== id))
  }

  return (
    <>
      <h2 className={styles.title}>Tag</h2>
      <div className={styles.tagContainer}>
        <div
          className={`${styles.tagBox} ${isFocus ? styles.focus : ''}`}
          onClick={onClickBox}
          onBlur={onBlur}
        >
          <TagList tagList={tagList} onDelete={onDelete} />
          <input
            className={styles.tagInput}
            placeholder="Press enter to add tags"
            ref={tagInput}
            value={tag}
            onChange={onChange}
            onKeyPress={onSubmit}
          />
        </div>
      </div>
    </>
  )
}

export default Tag
