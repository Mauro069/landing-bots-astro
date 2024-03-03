import styles from './styles.module.css'

export const RenderText = ({
  text,
  color
}: {
  text: string
  color: string
}) => {
  const props = Object.entries(text)

  return (
    <div className={styles.description}>
      {props.map(([key, value]) => (
        <div key={key} className={styles.line}>
          <p className={styles.key}>{key}</p>
          <p style={{ color }} className={styles.value}>
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}
