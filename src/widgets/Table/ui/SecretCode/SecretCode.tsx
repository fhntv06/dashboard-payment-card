import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './SecretCode.module.scss'
// import {Icon} from "../../../../shared";

const cx = classNames.bind(styles)

interface IProps {
  code: string
  className?: string
}

export const SecretCode = ({ code, className }: IProps) => {
  const [isVisible, setVisible] = useState<boolean>(false)

  const visibleHandler = () => {
    setVisible((prevState) => !prevState)
  }

  return (
    <div className={cx('secret-code', className)} onClick={visibleHandler}>
      <p className={cx('p-medium font-w-bold')}>{isVisible ? code : '*******************'}</p>
      {isVisible ? (
        // <Icon name='eye-close' size='big' />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ) : (
        // <Icon name='eye' size='big' />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
          <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2"></line>
        </svg>
      )}
    </div>
  )
}