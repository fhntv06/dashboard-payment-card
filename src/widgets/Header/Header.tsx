import classNames from "classnames/bind";

import { useSelector } from '../../hooks'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

import defaultImage from '../../shared/assets/images/default_avatar.png'

export const Header = () => {
  const { data: { name, surname, post, nickname, avatar } }= useSelector((state) => state.userData)
  
  return (
    <header className={cx('header')}>
      <p className={cx('header__title-page', 'p-big')}>Главная</p>
      <div className={cx('header__user')}>
        <div className={cx('header__user__content')}>
          <p className='p-medium'>{name} {surname}</p>
          <p className={cx('user__post', 'p-small')}>{post}</p>
          <p className={cx('user__nickname', 'p-small')}>{nickname}</p>
        </div>
        <div className={cx('user__avatar')}>
          <img src={avatar || defaultImage} alt='Avatar' title={`${name} ${surname}`} />
        </div>
      </div>
    </header>
  )
}
