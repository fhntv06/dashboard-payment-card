import classNames from 'classnames/bind'

// import { Icon } from '../Icon'

import styles from './Checkbox.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  id: number | string
  className?: string
}

export const Checkbox = ({ id, className }: IProps) => {
  return (
    <label className={cx('checkbox', className)} htmlFor={`${id}`}>
      <input id={`${id}`} type="checkbox"/>
      {/*<Icon className={cx('checkbox-icon')} name='arrow-check' size='small'/>*/}
      <svg className={cx('checkbox-icon')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4CAF50" width="18px" height="18px">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </label>
  )
}