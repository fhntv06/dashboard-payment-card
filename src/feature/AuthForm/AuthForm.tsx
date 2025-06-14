import { useState } from 'react'
import { HiddenField } from '../../feature'
import { Button, Input } from '../../shared'

import classNames from 'classnames/bind'

import styles from './AuthForm.module.scss'

const cx = classNames.bind(styles)

export const AuthForm = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const setLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  }
  const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div className={cx('container')}>
      <h1 className={cx('h1-large')}>Вход</h1>
      <form className={cx('form')}>
        <Input
          name='login'
          placeholder='Логин'
          value={login}
          onChange={setLoginHandler}
          typeStyle='black'
        />
        <HiddenField value={password} onChange={setPasswordHandler} />
        <Button className={cx('submit')} type='red'>Войти</Button>
      </form>
    </div>
  )
}


