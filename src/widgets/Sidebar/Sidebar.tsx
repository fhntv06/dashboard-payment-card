import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

import { sideBarMenuRoutes } from '../../app/routes'
import { Icon } from '../../shared'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

export const Sidebar = () => {
  return (
    <nav className={cx('sidebar')}>
      <h3 className={cx('sidebar__title')}>Карты оплаты</h3>
      <ul className={cx('sidebar__list')}>
        {sideBarMenuRoutes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => cx('sidebar__list__item', { 'active': isActive })}
          >
            {route.icon && <Icon name={route.icon} size='medium'/>}
            <p className={cx('p-small')}>{route.title}</p>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}