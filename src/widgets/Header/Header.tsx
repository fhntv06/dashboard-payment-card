import { useNavigate } from 'react-router-dom'
import classNames from "classnames/bind";

import { useSelector } from '../../hooks'
import { Button } from '../../shared'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

import defaultImage from '../../shared/assets/images/default_avatar.png'

interface IProps {
  title: string
  isDetail?: boolean
}

export const Header = ({ title, isDetail = false }: IProps) => {
  const navigate = useNavigate()
  const { name, surname, post, nickname, avatar } = useSelector((state) => state.userData)
  
  return (
    <header className={cx('header')}>
      <div className={cx('header__title-page')}>
        {isDetail && (
          <Button
            className={cx('header__button-back')}
            href='/'
            iconLeftName='arrow-left'
            onClick={() => navigate(-1)}
          />
        )}
        <p className={cx('p-big')}>{title}</p>
      </div>
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
