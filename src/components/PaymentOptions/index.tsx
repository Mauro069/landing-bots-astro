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
    setShow(!show)
  }

  return (
    <div className={styles.bg} style={{ zIndex: '98' }}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Payment Methods</h3>

        <div className={styles.cryptoContainer}>
          <button
            className={styles.button}
            style={{ background: '#FFEF01' }}
            onClick={showCryptoOptions}
          >
            {show ? 'Show Crypto Payments' : 'Hide Crypto Payments'}
          </button>
          {show && (
            <>
              <div className={styles.cryptos}>
                {cryptoOptions.map(option => {
                  return (
                    <div
                      onClick={() => copyAddress(option.address, option.title)}
                      className={styles.option}
                      key={option.title}
                    >
                      <img
                        className={styles.img}
                        src={option.img}
                        alt={option.title}
                      />
                    </div>
                  )
                })}
              </div>
              {copied && (
                <span style={{ maxWidth: '400px', alignSelf: 'center' }}>
                  <p>Copied address with {copied.coin}: </p>
                  <br />
                  <p className={styles.address}>{copied.address}</p>
                </span>
              )}
              <span>
                Send proof of payment{' '}
                <a className={styles.here} href='https://t.me/FrankBOTsMaker'>
                  here
                </a>
              </span>
            </>
          )}
        </div>

        <hr />

        {!show && (
          <>
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
          </>
        )}

        <h3 className={styles.title}>Total: ${price}</h3>

        <button className={styles.button} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}
