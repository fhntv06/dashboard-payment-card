import classNames from 'classnames/bind'
import { Header, Sidebar } from '../'
import { ModalProvider } from '../../app/providers'

import styles from './Wrapper.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: IProps) => {
  return (
    <>
      <Sidebar />
      <div className={cx('wrapper')}>
        <Header title='Главная' />
        <main className={cx('main')}>
          <ModalProvider>
            {children}
          </ModalProvider>
        </main>
      </div>
    </>
  )
}