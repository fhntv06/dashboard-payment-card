import classNames from 'classnames/bind'

import styles from './Role.module.scss'
import {Sidebar} from "../../widgets/Sidebar/Sidebar";

const cx = classNames.bind(styles)

export const Role = () => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <main className={cx('main')}>

      </main>
    </div>
  )
}
