import { useState } from 'react'
import styles from './Faqs.module.css'
import { faqs } from '../../utils/faqs'

export const Faqs = () => {
  const [questionSelected, setQuestionSelected] = useState(faqs[0])

  const toggleQuestion = ({ q, a }) => {
    if (q === questionSelected?.q) {
      setQuestionSelected(null)
      return
    }

    setQuestionSelected({ q, a })
  }

  return (
    <div
      style={{ cursor: 'pointer' }}
      id='faq'
      className={`section ${styles['faqs-container']}`}
    >
      <h3 className={styles.title}>Frequently Asked Questions</h3>

      <div className={styles.faqs}>
        {faqs.map(({ q, a }) => {
          const isThis = q === questionSelected?.q

          return (
            <div
              key={q}
              className={`${styles.faq} ${isThis ? styles.active : ''}`}
              onClick={() => toggleQuestion({ q, a })}
            >
              <div className={styles.question}>
                <span>{q}</span>

                <p>{isThis ? '+' : '-'}</p>
              </div>

              <div className={styles.answer}>
                <span>{a}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
