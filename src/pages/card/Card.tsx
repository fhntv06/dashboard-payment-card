import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'

import { getCardData } from '../../app/api'
import { Header, Sidebar } from '../../widgets'
import { HiddenField } from '../../feature'
import { Status, DealerName } from '../../widgets/Table/ui'
import { ICard, IColumn } from '../../widgets/Table/type'

import styles from './Card.module.scss'

const cx = classNames.bind(styles)

const columns: IColumn[] = [
  { key: 'id', title: 'ID', width: 70 },
  { key: 'ident_num', title: 'Номер карты', width: 140 },
  { key: 'status_name', title: 'Статус', width: 140 },
  { key: 'nominal', title: 'Номинал', width: 90 },
  { key: 'dealer_name', title: 'Дилер', width: 110 },
  { key: 'secret_code', title: 'Секретный код', width: 190 },
]

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
    status_id: 10,
    status_name: "Активирована"
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
          <div className={cx('table')}>
            <div className={cx('table__head')}>
              {columns.map((column) => (
                <p key={column.key} className={cx('p-medium font-w-bold')} style={{ minWidth: column.width }}>{column.title}</p>
              ))}
            </div>
            <div className={cx('table__body')}>
              <div className={cx('table__row')}>
                <div className={cx('table__row__item')} style={{ minWidth: columns[0].width }}>
                  <p className={cx('p-medium')}>{data.id}</p>
                </div>
                <div className={cx('table__row__item')} style={{ minWidth: columns[1].width }}>
                  <p className={cx('p-medium font-w-bold')}>№{data.ident_num}</p>
                </div>
                <div className={cx('table__row__item')} style={{ minWidth: columns[2].width, border: 'none' }}>
                  <Status id={data.status_id} title={data.status_name}/>
                </div>
                <div className={cx('table__row__item')} style={{ minWidth: columns[3].width }}>
                  <p className={cx('p-medium')}>{data.nominal}</p></div>
                <div className={cx('table__row__item')} style={{ minWidth: columns[4].width }}>
                  <DealerName id={data.dealer_id} name={data.dealer_name} />
                </div>
                <div className={cx('table__row__item')} style={{ minWidth: columns[5].width }}>
                  <HiddenField code={String(data.secret_code)} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={cx('information')}>
            <div className={cx('information__row')}>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Дата создания:</p>
                <p className={cx('information__item', 'p-medium')}>25.12.2025 12:47</p>
              </div>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Админ, создавший:</p>
                <p className={cx('information__item', 'p-medium')}>@imadmin</p>
              </div>
            </div>
            <div className={cx('information__row')}>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Дата активации:</p>
                <p className={cx('information__item', 'p-medium')}>25.12.2025 12:48</p>
              </div>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Админ, активировавший:</p>
                <p className={cx('information__item', 'p-medium')}>@imadmin</p>
              </div>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Дилер:</p>
                <p className={cx('information__item', 'p-medium')}>@diler</p>
              </div>
            </div>
            <div className={cx('information__row')}>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Дата деактивации:</p>
                <p className={cx('information__item', 'p-medium')}>25.12.2025 12:50</p>
              </div>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Админ, деактивировавший:</p>
                <p className={cx('information__item', 'p-medium')}>@imadmin</p>
              </div>
            </div>
            <hr />
            <div className={cx('information__row')}>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Пользователь, использовавший карту:</p>
                <p className={cx('information__item', 'p-medium')}>@username</p>
              </div>
              <div className={cx('information__column')}>
                <p className={cx('p-medium font-w-semibold')}>Баланс пользователя:</p>
                <div className={cx('information__row')}>
                  <div className={cx('information__item')}>
                    <p className={cx('p-medium')}>До</p>
                    <p className={cx('p-medium')}>0</p>
                  </div>
                  <div className={cx('information__item')}>
                    <p className={cx('p-medium')}>После</p>
                    <p className={cx('p-medium')}>250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
