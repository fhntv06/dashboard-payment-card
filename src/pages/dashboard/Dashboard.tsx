import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import classNames from 'classnames/bind'

import { ModalContext } from'../../app/contexts'
import { ModalContextTypes } from '../../app/providers/types'
import { getCardsData } from '../../app/api'
import { setCardsData } from '../../app/store/slices'
import { Sidebar, Header, Table } from '../../widgets'
import { Pagination } from '../../feature'
import { useDispatch, useSelector } from '../../hooks'
import { Button } from '../../shared'

import styles from './Dashboard.module.scss'

const cx = classNames.bind(styles)

export const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { openHandler: openHandlerModal } = useContext<ModalContextTypes>(ModalContext)
  const { data: cardsData } = useSelector((state) => state.cardsData)
  const dispatch = useDispatch()

  const [totalPages, setTotalPages] = useState<number>(3)
  const [totalItems, setTotalItems] = useState<number>(0)
  const [itemsPerPage] = useState<number>(2)
  const [page, setPage] = useState<number>(Number(searchParams.get('page')) || 1)

  const activationHandler = () => {
    console.log('activationHandler')
  }
  const deActivationHandler = () => {
    console.log('deActivationHandler')
  }
  const generateExcelHandler = () => {
    console.log('generateExcelHandler')
  }
  const openModalCreateCardHandler = () => {
    console.log('openModalCreateCardHandler')
    openHandlerModal('create__card')
  }
  const changePageHandler = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('page', page.toString())
    setSearchParams(newSearchParams)

    setPage(page)
  }

  useEffect(() => {
    getCardsData(page, itemsPerPage)
      .then((res) => {
        const { data, items, pages } = res.data

        setTotalPages(pages)
        setTotalItems(items)

        dispatch(setCardsData({ data }))
      })
      .catch((err) => {
        new Error('Ошибка в запросе: ' + err)
      })
  }, [page])

  return (
    <>
      <Sidebar />
      <div className={cx('wrapper')}>
        <Header title='Главная' />
        <main className={cx('main')}>
          <div className={cx('search-wrapper')}>
            <h3>Search component</h3>
          </div>
          <div className={cx('functions-button')}>
            <div className={cx('functions-button__left')}>
              <Button type='green' onClick={activationHandler}>Активировать ✅</Button>
              <Button type='gray' onClick={deActivationHandler}>Деактивировать ❌</Button>
            </div>
            <div className={cx('functions-button__right')}>
              <Button className={cx('functions-button__generate-excel')} type='orange' onClick={generateExcelHandler}>Excel</Button>
              <Button className={cx('functions-button__create-card')} type='green' onClick={openModalCreateCardHandler}>Создать карты</Button>
              <Button onClick={openModalCreateCardHandler}>Штрихкод</Button>
            </div>
          </div>
          <hr/>
          <Table data={cardsData} className={cx('table')}/>
          <hr/>
          <Pagination
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
            changePageHandler={changePageHandler}
            totalPages={totalPages}
            totalItems={totalItems}
          />
        </main>
      </div>
    </>
  )
}
