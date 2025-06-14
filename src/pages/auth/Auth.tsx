import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'

import { AuthForm } from '../../feature'

import styles from './Auth.module.scss'

const cx = classNames.bind(styles)

export const Auth = () => {
  return (
    <div className={cx('wrapper')}>
      <main className={cx('main')}>
        <div className={cx('sidebar')}>
          <h3 className={cx('sidebar__title')}>Карты оплаты</h3>
          <AuthForm />
          <Link className={cx('forgotten-password')} to='/forgotten-password'>
            <p className={cx('p-medium')}>Забыли пароль?</p>
          </Link>
        </div>

        <div className={cx('text-container')}>
          <h1 className={cx('h2', 'font-w-regular')}>Админ Панель</h1>
          <p className={cx('font-w-extrabold')}>Карты оплаты</p>
        </div>
      </main>
    </div>
  )
}
