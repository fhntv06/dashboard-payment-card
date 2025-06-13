import classNames from "classnames/bind";

import { TypeStatus, TypeStatusId } from './types'

import styles from './Status.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  id: TypeStatusId
  title: TypeStatus,
  className?: string
}

export const Status = ({ title, id, className }: IProps) => {

  let classType = 'deactivation'

  switch (id) {
    case 10:
    case 20:
    case 50:
      classType = 'used'
      break
    case 30:
      classType = 'not-activation'
      break
    case 40:
      classType = 'activation'
      break
    case 99:
      classType = 'deactivation'
      break
    default:
  }

  return (
    <div className={cx('status', classType, className)}>
      <p className={cx('p-medium')}>{title}</p>
    </div>
  )
}