import { useState } from 'react'
import { Icon } from '../index.ts'
import { Input } from '../index.ts'
import classNames from 'classnames/bind'

import styles from './PasswordInput.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  pass?: string
  className?: string
  placeholder?: string
  disabled?: boolean
}

export const PasswordInput = ({pass, className, placeholder, disabled}: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const changeVisible = () => {
    setIsVisible(!isVisible)
  }

  const classNames = cx(className, 'password-input-container')

  return (
    <div className={classNames}>
      <Input type={isVisible ? "text" : "password"} styleType="gray" disabled={disabled} placeholder={placeholder} name="password"
             id="password-input" value={pass}/>
      {/*<input className={classNames} type={isVisible ? "text" : "password"} disabled={disabled}*/}
      {/*       placeholder={placeholder} name="password" id="password-input"/>*/}
      <a className={cx('password-control')} onClick={changeVisible}>
        <Icon name={isVisible ? 'eye' : 'eye-close'} size='medium'/>
      </a>
    </div>

  )
}
