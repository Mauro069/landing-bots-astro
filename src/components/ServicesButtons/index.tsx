import { useState } from 'react'
import { Buttonlist } from './components/ButtonList'
import styles from './ServicesButtons.module.css'
import { coinbaseLinks } from '../../utils/paymentOptions'
import { PaymentOptions } from '../PaymentOptions'

const capitalValues = [
  '10,000',
  '25,000',
  '50,000',
  '100,000',
  '200,000',
  '300,000'
]

const accTypesValues = ['Challenge', 'Real']
const platformValues = ['Metatrader 4', 'Metatrader 5']

export const ServicesButtons = () => {
  const [price, setPrice] = useState(capitalValues[0])
  const [accountType, setAccountType] = useState(accTypesValues[0])
  const [platform, setPlatform] = useState(platformValues[0])
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(open => !open)

  const prices = {
    '10,000': '$90',
    '25,000': '$190',
    '50,000': '$390',
    '100,000': '$590',
    '200,000': '$990',
    '300,000': '$1490'
  }

  const priceSelected = prices[price]
  const coinbaseLink = coinbaseLinks.services[accountType.toLowerCase()][price]

  return (
    <>
      <div className={styles['buttons-lists']}>
        <Buttonlist
          optionSelected={accountType}
          handleClick={accType => setAccountType(accType)}
          title='Type account'
          options={accTypesValues}
        />

        <Buttonlist
          optionSelected={price}
          handleClick={cap => setPrice(cap)}
          title='Capital'
          options={capitalValues}
        />

        <Buttonlist
          optionSelected={platform}
          handleClick={platform => setPlatform(platform)}
          title='Platform'
          options={platformValues}
        />

        <div className={styles.price}>
          <h5>Price:</h5>
          <p>{priceSelected}</p>

          <button onClick={toggle}> Buy now</button>
        </div>
      </div>

      {isOpen && (
        <PaymentOptions
          coinbaseLink={coinbaseLink}
          closeModal={toggle}
          price={priceSelected.split('$')[1]}
        />
      )}
    </>
  )
}
