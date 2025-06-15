import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../../app/api'
import { HiddenField } from '../../feature'
import { Button, Input } from '../../shared'
import { setUserData } from '../../app/store/slices'
import { pathsRoutes } from '../../app/routes'


import classNames from 'classnames/bind'

import styles from './AuthForm.module.scss'

const cx = classNames.bind(styles)

export const AuthForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

    const logininigHandler = () => {
      getUserData(1)
        .then(({ data }) => {
          dispatch(setUserData({ ...data }))

          navigate(`${pathsRoutes.dashboard}`)
        })
        .catch((err) => {
          new Error('Ошибка в запросе: ' + err)
        })
    }

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
        <Button
          className={cx('submit')}
          type='red'
          onClick={logininigHandler}
          disabled={!login || !password}
        >
          Войти
          </Button>
      </form>
    </div>
  )
}


