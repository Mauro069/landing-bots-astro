import styles from './ButtonList.module.css'

interface Props {
  title: string
  options: string[]
}

export const Buttonlist = ({ options, title }: Props) => {
  const handleClick = option => alert(option)
  return (
    <div className={styles.buttonList}>
      <h5>{title}</h5>
      <div className={styles.options}>
        {options?.map(option => {
          return (
            <button
              key={option}
              className={styles.option}
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
