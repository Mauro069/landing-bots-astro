import { useState } from 'react'
import styles from './RobotCard.module.css'
import { coinbaseLinks, type Robot, type RobotType } from '../utils/texts'

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

const RenderText = ({ text, color }: { text: string; color: string }) => {
  const props = Object.entries(text)

  return (
    <div className={styles.description}>
      {props.map(([key, value]) => (
        <div className={styles.line}>
          <p className={styles.key}>{key}</p>
          <p style={{ color }} className={styles.value}>
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}

const PaymentOptions = ({
  robot,
  closeModal
}: {
  robot: RobotType
  closeModal: () => void
}) => {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <h3>Payment Methods</h3>

        <button>Crypto Payment</button>

        <hr />

        <span>To pay with cards, request a payment link via WhastApp</span>
        <a
          style={{ background: '#0DBF42', color: 'white' }}
          href='https://wa.me/message/53WVGAKRZ7OSB1'
          target='_blank'
        >
          Request
        </a>

        <hr />

        <a
          href={coinbaseLinks[robot]}
          style={{ background: '#0556FF', color: 'white' }}
        >
          Coinbase
        </a>

        <hr />

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}
