import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import { Header, Sidebar } from '../../widgets'

import { getCardData } from '../../app/api'
import { ICard } from '../../app/store/slices/cards/types'

import styles from './Card.module.scss'

const cx = classNames.bind(styles)

export const Card = () => {
  const { id } = useParams()
  const [data, setData] = useState<ICard>({
    created_dt: "",
    dealer_id: 0,
    dealer_name: "",
    id: 0,
    ident_num: "",
    nominal: 0,
    secret_code: "",
    status_id: 0,
    status_name: ""
  })

  useEffect(() => {
    if (id) {
      getCardData(id)
        .then(({ data }) => {
          console.log('data: ' + data)

          setData(data)
        })
        .catch((error) => {
          new Error('Error in getCardData: ' + error)
        })
    }

  }, [])

  return (
    <>
      <Sidebar />
      <div className={cx('wrapper')}>
        <Header title={`Карточка карты: №${data.ident_num}`} isDetail />
        <main className={cx('main')}>
          <p>{data.id}</p>
          <p>{data.ident_num}</p>
          <p>{data.status_name}</p>
          <p>{data.nominal}</p>
          <p>{data.dealer_name}</p>
          <p>{data.secret_code}</p>
        </main>
      </div>
    </>
  )
}
