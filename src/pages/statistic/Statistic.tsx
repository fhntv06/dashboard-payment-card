import classNames from 'classnames/bind'
import { Sidebar } from '../../widgets/Sidebar/Sidebar'

import styles from './Statistic.module.scss'

const cx = classNames.bind(styles)

export const Statistic = () => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <main className={cx('main')}>

      </main>
    </div>
  )
}
