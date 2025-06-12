import { Link } from 'react-router-dom'
// import { Input, Button } from '../../shared'
import classNames from 'classnames/bind'
import styles from './AuthForm.module.scss'
// import {IconNames} from "../../shared/ui/Icon/types.ts";

const cx = classNames.bind(styles)

export const AuthForm = () => {
  return (
    <div className={cx('auth-container')}>
      <div className={cx('auth-form-container')}>
        <h1 className={cx('h1-large')}>Вход</h1>
        <form className={cx('auth-form')}>
          <input id="login" name="login-input" placeholder="Логин" type="text"/>
          <div className="auth-form__password">
            <input type="password" id="password-input"  placeholder="Пароль" name="password"/>
            {/*<a href="#" className="auth-form__password-control" onClick="return show_hide_password(this);"></a>*/}
          </div>
          <button type="submit">Войти</button>
          {/*<Button />*/}
          {/*<PasswordInput className={cx('input')} />*/}
          <div className={cx('container')}></div>
        </form>
      </div>

      <Link className={'auth__forgotten-password'} to="/forgotten-password">Забыли пароль?</Link>
    </div>
  )
}


// function show_hide_password(target){
// var input = document.getElementById('password-input');
// if (input.getAttribute('type') == 'password') {
//   target.classList.add('view');
//   input.setAttribute('type', 'text');
// } else {
//   target.classList.remove('view');
//   input.setAttribute('type', 'password');
// }
// return false;
// }