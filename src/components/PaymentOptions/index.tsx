import { useState } from 'react'
import { cryptoOptions } from '../../utils/paymentOptions'
import styles from './styles.module.css'

export const PaymentOptions = ({
  coinbaseLink,
  closeModal,
  price
}: {
  coinbaseLink: string
  closeModal: () => void
  price: number
}) => {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState<any>(null)

  function copyAddress (address: string, coin: string) {
    navigator.clipboard.writeText(address)
    setCopied({ address, coin })
  }

  function showCryptoOptions () {
    setShow(true)
  }

  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <h3>Payment Methods</h3>

        <div className={styles.cryptoContainer}>
          <button style={{ background: '#FFEF01' }} onClick={showCryptoOptions}>
            Crypto Payment
          </button>
          {show && (
            <>
              <div className={styles.cryptos}>
                {cryptoOptions.map(option => {
                  return (
                    <div
                      onClick={() => copyAddress(option.address, option.title)}
                      className={styles.option}
                    >
                      <img src={option.img} alt={option.title} />
                    </div>
                  )
                })}
              </div>
              {copied && (
                <span style={{ maxWidth: '400px', alignSelf: 'center' }}>
                  <p>Copied address with {copied.coin}: </p>
                  <br />
                  <p>{copied.address}</p>
                </span>
              )}
              <span>
                Send proof of payment{' '}
                <a href='https://t.me/FrankBOTsMaker'>here</a>
              </span>
            </>
          )}
        </div>

        <hr />

        <span>To pay with cards, request a payment link via WhastApp</span>
        <a
          style={{ background: '#0DBF42', color: 'white' }}
          href='https://wa.link/yves5o'
          target='_blank'
        >
          Request
        </a>

        <hr />
        <a
          href={coinbaseLink}
          style={{ background: '#0556FF', color: 'white' }}
        >
          Coinbase
        </a>

        <hr />
        <h3>Total: ${price}</h3>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}