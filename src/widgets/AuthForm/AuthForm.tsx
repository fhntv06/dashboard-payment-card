import { Link } from 'react-router-dom'
import { PasswordInput, Button, Input } from '../../shared'
import classNames from 'classnames/bind'
import styles from './AuthForm.module.scss'

const cx = classNames.bind(styles)

export const AuthForm = () => {
  return (
    <div className={cx('auth-container')}>
      <div className={cx('auth-form-container')}>
        <h1 className={cx('h1-large')}>Вход</h1>

        <form className={cx('auth-form')}>
          <Input id="login" name="login-input" placeholder="Логин" type="text" />
          <PasswordInput placeholder="Пароль" />
          <Button className={cx('auth-form__submit-button')} type={'red'} >Войти</Button>
        </form>
      </div>

      <Link className={cx('auth__forgotten-password')} to="/forgotten-password">Забыли пароль?</Link>
    </div>
  )
}


