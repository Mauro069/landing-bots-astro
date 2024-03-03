import styles from './styles.module.css'

interface Props {
  title: string
  options: string[]
  handleClick?: (option: string) => void
  optionSelected: string
}

export const Buttonlist = ({
  options,
  title,
  optionSelected,
  handleClick
}: Props) => {
  return (
    <div className={styles.buttonList}>
      <h5>{title}</h5>
      <div className={styles.options}>
        {options?.map(option => {
          return (
            <button
              key={option}
              className={`${styles.option} ${
                optionSelected === option ? styles.active : ''
              }`}
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
