import classNames from "classnames/bind";

import styles from './DealerName.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  id: number
  name: string
  className?: string
}

export const DealerName = ({ id, name, className }: IProps) => {
  const isHave = id !== 0

  return (
    <p className={cx('p-medium', className, { 'dealer-name--have': isHave, 'font-w-bold': isHave, 'p-reg': !isHave })}>{name}</p>
  )
}