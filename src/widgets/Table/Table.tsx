import { useMemo, useState} from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

import { Status, SecretCode, DealerName } from './ui'
import {
  Checkbox,
  // Icon
} from '../../shared'
import { IColumn, ICard } from './type'

import styles from './Table.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  data: ICard[]
  className?: string
}

const columns: IColumn[] = [
  { key: 'id', title: 'ID', width: 70 },
  { key: 'ident_num', title: 'Номер карты', width: 140 },
  { key: 'status_name', title: 'Статус', width: 140 },
  { key: 'nominal', title: 'Номинал', width: 90 },
  { key: 'dealer_name', title: 'Дилер', width: 110 },
  { key: 'secret_code', title: 'Секретный код', width: 190 },
]

export const Table = ({ data, className }: IProps) => {
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' })

  const requestSortHandler = (key: string) => {
    setSortConfig({
      key,
      direction: (sortConfig.key === key && sortConfig.direction === 'asc') ? 'desc' : 'asc'
    })
  }
  const selectAllHandler = () => {
    console.log('selectAllHandler')
  }

  const sortedData = useMemo((): ICard[] => {
    if (!sortConfig.key) return data

    return [...data].sort((a, b) => {
      // @ts-ignore
      const aValue = a[sortConfig.key];
      // @ts-ignore
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      const aString = String(aValue).toLowerCase();
      const bString = String(bValue).toLowerCase();

      if (aString < bString) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aString > bString) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [data, sortConfig.key, sortConfig.direction])

  return (
    <div className={cx('table', className)}>
      <div className={cx('table__head')}>
        <div
          onClick={() => selectAllHandler()}
          className={cx('table__head__title')}
          style={{ minWidth: 20 }}
        >
          <Checkbox id='100'/>
        </div>
        {columns.map((column) => (
          <div
            key={column.key}
            onClick={() => requestSortHandler(column.key)}
            className={cx('table__head__title')}
            style={{ minWidth: column.width }}
          >
            <p className={cx('p-medium font-w-bold')}>{column.title}</p>
            <div className={cx('head__title-icon')}>
              <svg id="sorting-asc" width="12" height="12" viewBox="0 0 12 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.84861 8.48438H2.15173C1.92087 8.48438 1.79196 8.24063 1.93493 8.07422L5.78337 3.61172C5.89353 3.48398 6.10564 3.48398 6.21696 3.61172L10.0654 8.07422C10.2084 8.24063 10.0795 8.48438 9.84861 8.48438Z"
                  fill={`${(sortConfig.key === column.key && sortConfig.direction === 'asc') ? '#353535' : '#EAEAEA'}`}/>
              </svg>
              <svg id="sorting-desc" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: 'rotateZ(-180deg)' }}
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.84861 8.48438H2.15173C1.92087 8.48438 1.79196 8.24063 1.93493 8.07422L5.78337 3.61172C5.89353 3.48398 6.10564 3.48398 6.21696 3.61172L10.0654 8.07422C10.2084 8.24063 10.0795 8.48438 9.84861 8.48438Z"
                  fill={`${(sortConfig.key === column.key && sortConfig.direction === 'desc') ? '#353535' : '#EAEAEA'}`}/>
              </svg>
              {/*<Icon name='sorting-asc' className={cx({'icon-sort--active': sortConfig.direction === 'asc'})}/>*/}
              {/*<Icon name='sorting-desc' className={cx({'icon-sort--active': sortConfig.direction === 'desc'})}/>*/}
            </div>
          </div>
        ))}
        <div className={cx('table__head__title')} style={{minWidth: 100}}>
          <p className={cx('font-w-bold')}>Открыть</p>
        </div>
      </div>
      <div className={cx('table__body')}>
        {sortedData.map((item) => (
          <div
            key={item.id}
            className={cx('table__row')}
          >
            <div className={cx('table__row__item')} style={{minWidth: 20, border: 'none'}}>
              <Checkbox id={item.id}/>
            </div>
            <div className={cx('table__row__item')} style={{ minWidth: columns[0].width }}>
                <p className={cx('p-medium')}>{item.id}</p>
              </div>
              <div className={cx('table__row__item')} style={{ minWidth: columns[1].width }}>
                <p className={cx('p-medium font-w-bold')}>№{item.ident_num}</p>
              </div>
              <div className={cx('table__row__item')} style={{ minWidth: columns[2].width, border: 'none' }}>
                <Status id={item.status_id} title={item.status_name}/>
              </div>
              <div className={cx('table__row__item')} style={{ minWidth: columns[3].width }}>
                <p className={cx('p-medium')}>{item.nominal}</p></div>
              <div className={cx('table__row__item')} style={{ minWidth: columns[4].width }}>
                <DealerName id={item.dealer_id} name={item.dealer_name} />
              </div>
              <div className={cx('table__row__item')} style={{ minWidth: columns[5].width }}>
                <SecretCode code={String(item.secret_code)} />
              </div>
              <div className={cx('table__row__item')} style={{ minWidth: 100, border: 'none' }}>
                <NavLink to={`${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/card/${item.id}`} className={cx('table__row__button-open')}>
                  {/*<Icon name='arrow-right' />*/}
                  <svg id="arrow-right" width="12" height="19" viewBox="0 0 12 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.73013 0.214037C1.03697 -0.0713458 1.53446 -0.0713458 1.8413 0.214037L11.2699 8.98327C11.5767 9.26865 11.5767 9.73135 11.2699 10.0167L1.8413 18.786C1.53446 19.0713 1.03697 19.0713 0.73013 18.786C0.42329 18.5006 0.42329 18.0379 0.73013 17.7525L9.60312 9.5L0.73013 1.2475C0.42329 0.962118 0.42329 0.49942 0.73013 0.214037Z"
                          fill="#353535"/>
                  </svg>
                </NavLink>
              </div>
              {/*<Button className={cx('table__row__button-open')} iconLeftName='arrow-right' />*/}
            </div>
          ))}
      </div>
    </div>
  )
}