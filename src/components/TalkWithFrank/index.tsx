import { useState } from 'react'
import styles from './TalkWithFrank.module.css'

export const TalkWithFrank = () => {
  const [show, setShow] = useState(true)

  return (
    <section id='contact' className={styles['talk-with-frank']}>
      <h3>Contact</h3>

      {show ? (
        <button onClick={() => setShow(false)}>
          <img src='/assets/cabeza.png' />
          <p>Talk with Frank</p>
        </button>
      ) : (
        <div className={styles.socials}>
          <a
            href='https://wa.me/message/53WVGAKRZ7OSB1'
            target='_blank'
            className={styles.wsp}
          >
            Whatsapp
          </a>
          <a
            href='https://t.me/FrankBOTsMaker'
            target='_blank'
            className={styles.tl}
          >
            Telegram
          </a>
        </div>
      )}
    </section>
  )
}
