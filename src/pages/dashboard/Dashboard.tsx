import classNames from 'classnames/bind'

import styles from './Dashboard.module.scss'
import {Sidebar} from "../../widgets/Sidebar/Sidebar";

const cx = classNames.bind(styles)

export const Dashboard = () => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <main className={cx('main')}>

      </main>
    </div>
  )
}
