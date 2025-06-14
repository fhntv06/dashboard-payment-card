import classNames from 'classnames/bind'

import { Button, Select } from '../'

import styles from './CreateCardModal.module.scss'

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
  const createCardHandler = () => {
    console.log('createCardHandler')  
  }

  return (
    <>
      <h2 className={cx('modal__title')}>Создание карты</h2>
      <div className={cx('modal__content')}>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Номинал *</p>
          <Select data={nominalData} />
        </div>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Количество *</p>
          <input name='count' className={cx('input')} placeholder='Введите количество' />
        </div>
        <div className={cx('modal__content__column')}>
          <p className={cx('p-medium')}>Дилер *</p>
          <Select data={dealerData} />
        </div>
      </div>
      <Button type='green' onClick={createCardHandler}>Создать карты</Button>
    </>
  )
}
