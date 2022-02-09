import styles from './TagItem.module.css'

function TagItem({ item, onDelete }) {
  return (
    <div className={styles.itemBox}>
      <span>{item.text}</span>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        X
      </button>
    </div>
  )
}

export default TagItem
