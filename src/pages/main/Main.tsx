import classNames from 'classnames/bind'

import styles from './Main.module.scss'

const cx = classNames.bind(styles)

export const Main = () => {
  return (
    <main className={cx('main')}>
      <h1>Main</h1>
    </main>
  )
}
