import classNames from 'classnames/bind'

import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  itemsPerPage: number
  page: number
  setPage: (page: number) => void
  changePageHandler: (page: number) => void
  totalPages: number
  totalItems: number
}

export const Pagination = ({
  itemsPerPage,
  page,
  changePageHandler,
  totalPages,
  totalItems
}: IProps) => {



  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pagination__button', {'pagination__button--disabled': page === 1})}
        onClick={() => changePageHandler(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        {/*<Icon name='arrow-left' />*/}
        <svg id="arrow-left" width="12" height="19" viewBox="0 0 12 19" fill="none" style={{ transform: 'rotate(-180deg)' }}>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M0.73013 0.214037C1.03697 -0.0713458 1.53446 -0.0713458 1.8413 0.214037L11.2699 8.98327C11.5767 9.26865 11.5767 9.73135 11.2699 10.0167L1.8413 18.786C1.53446 19.0713 1.03697 19.0713 0.73013 18.786C0.42329 18.5006 0.42329 18.0379 0.73013 17.7525L9.60312 9.5L0.73013 1.2475C0.42329 0.962118 0.42329 0.49942 0.73013 0.214037Z"
                fill="#353535"></path>
        </svg>
      </button>

      <p>Страница</p>

      <input
        className={cx('pagination__input')}
        type="number"
        name='page-prev'
        value={page}
        onChange={(event) => changePageHandler(Number(event.target.value))}
      />

      <p>из {totalPages}</p>

      <button
        className={cx('pagination__button', { 'pagination__button--disabled': page === totalPages })}
        onClick={() => changePageHandler(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <svg id="arrow-right" width="12" height="19" viewBox="0 0 12 19" fill="none">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M0.73013 0.214037C1.03697 -0.0713458 1.53446 -0.0713458 1.8413 0.214037L11.2699 8.98327C11.5767 9.26865 11.5767 9.73135 11.2699 10.0167L1.8413 18.786C1.53446 19.0713 1.03697 19.0713 0.73013 18.786C0.42329 18.5006 0.42329 18.0379 0.73013 17.7525L9.60312 9.5L0.73013 1.2475C0.42329 0.962118 0.42329 0.49942 0.73013 0.214037Z"
                fill="#353535"></path>
        </svg>
      </button>

      <input
        className={cx('pagination__input')}
        type="text"
        name='page-next'
        value={`${itemsPerPage} строк`}
        disabled
      />

      <p>Всего {totalItems} записей</p>
    </div>
  )
}