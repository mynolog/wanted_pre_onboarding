import TagItem from './TagItem'
import styles from './TagList.module.css'

function TagList({ tagList, onDelete }) {
  return (
    <ul className={styles.tagList}>
      {tagList.map((item) => (
        <li key={item.id} className={styles.tagItem}>
          <TagItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}

export default TagList
