import { useState } from 'react'
import classNames from 'classnames/bind'

import { Button, Select } from '../'

import styles from './CreateCardModal.module.scss'
import { Input } from '../Input'

const cx = classNames.bind(styles)

const nominalData = [
  {
    name: '10',
    active: true
  },
  {
    name: '20',
    active: false
  },
  {
    name: '30',
    active: false
  },
]

const dealerData = [
  {
    name: 'dealer1',
    active: true
  },
  {
    name: 'dealer2',
    active: false
  },
    {
    name: 'dealer3',
    active: false
  },
]

export const CreateCardModal = () => {
  const [count, setCount] = useState<string>('')
  const [nominal, setNominal] = useState<string>(nominalData[0].name)
  const [dealer, setDealer] = useState<string>(dealerData[0].name)

  const createCardHandler = () => {
    alert(`Карты с номиналом ${nominal}, количеством ${count}, дилером ${dealer} созданы!`)
  }
  const setCountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value)
  }
  const setNominalDataHandler = (nominal: string) => {
    setNominal(nominal)
  }
    const setDealerDataHandler = (nominal: string) => {
    setDealer(nominal)
  }

  // данные для дальнейшей обработки
  console.log({ nominal, count, dealer })

  return (
    <>
      <h2 className={cx('modal__title')}>Создание карты</h2>
      <div className={cx('modal__content')}>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Номинал *</p> 
          <Select data={nominalData} setData={setNominalDataHandler} />
        </div>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Количество *</p>
          <Input
            name='count'
            className={cx('input')}
            placeholder='Введите количество'
            value={count}
            onChange={setCountHandler}
          />
        </div>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Дилер *</p>
          <Select data={dealerData} setData={setDealerDataHandler} />
        </div>
      </div>
      <Button
        type='green'
        onClick={createCardHandler}
        disabled={!count}
      >
        Создать карты
      </Button>
    </>
  )
}
