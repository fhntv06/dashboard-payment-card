import classNames from 'classnames/bind'

import styles from './Auth.module.scss'
import {AuthForm} from "../../widgets/AuthForm/AuthForm";

const cx = classNames.bind(styles)

export const Auth = () => {
  return (
    <div className={cx('wrapper')}>
      <main className={cx('main')}>
        <div className={cx('auth-sidebar')}>
          <h3 className={cx('auth-sidebar__title')}>Карты оплаты</h3>
          <AuthForm />
        </div>

        <div className={cx("main-text-container")}>
          <h2>Админ Панель</h2>
          <h1 className={cx("font-w-extrabold")}>Карты оплаты</h1>
        </div>
      </main>
    </div>
  )
}
