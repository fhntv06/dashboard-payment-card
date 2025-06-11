import classNames from 'classnames/bind'
import { Sidebar } from '../../widgets/Sidebar/Sidebar'

import styles from './History.module.scss'

const cx = classNames.bind(styles)

export const History = () => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <main className={cx('main')}>

      </main>
    </div>
  )
}
