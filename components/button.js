import styles from '../public/css/Button.module.css'
 
export default function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.primary}
    >
      登録
    </button>
  )
}