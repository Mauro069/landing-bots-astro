import { PaymentOptions, RenderText } from './components'
import { useState } from 'react'
import styles from './RobotCard.module.css'
import type { Robot } from '../../utils/robots'

export const RobotCard = ({
  description,
  iconUrl,
  priceWithDiscount,
  title,
  color,
  bgUrl,
  type
}: Robot) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(open => !open)

  return (
    <>
      <div className={styles.card} style={{ borderColor: color, color }}>
        <img className={styles.bg} src={bgUrl} />
        <div className={styles.info}>
          <h4>{title}</h4>
          <img src={iconUrl} alt={title} />
          <RenderText color={color} text={description} />
          <div className={styles.price}>
            <p>Price</p>
            <b>${priceWithDiscount}</b>
          </div>

          <button
            onClick={toggle}
            style={{ borderColor: color, backgroundColor: color }}
          >
            Buy
          </button>
        </div>
      </div>

      {isOpen && <PaymentOptions robot={type} closeModal={toggle} />}
    </>
  )
}
