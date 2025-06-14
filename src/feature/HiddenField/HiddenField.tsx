import { useState } from 'react'
import {
  Input,
//  Icon
} from '../../shared'
import classNames from 'classnames/bind'

import styles from './HiddenField.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const HiddenField = ({ value, onChange, className }: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const changeVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <div className={cx('input', className)}>
      <Input
        name='password'
        type={isVisible ? 'text' : 'password'}
        placeholder='Пароль'
        value={value}
        onChange={onChange}
        typeStyle='black'
      />
      <button className={cx('visible-control')} onClick={changeVisible} type='button'>
        {isVisible ? (
          // <Icon name='eye-close' size='big' />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="white"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        ) : (
          // <Icon name='eye' size='big' />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="white"></path>
            <circle cx="12" cy="12" r="3"></circle>
            <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2"></line>
          </svg>
        )}
      </button>
    </div>

  )
}
