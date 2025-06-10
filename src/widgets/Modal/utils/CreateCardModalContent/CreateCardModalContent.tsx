import classNames from 'classnames/bind'

import styles from './CreateCardModalContent.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  closeHandler: () => void,
}

export const CreateCardModalContent = ({ closeHandler }: IProps) => {
  return (
    <div className={cx('wrapper')} onClick={closeHandler}>
      <h1>CreateCardModalContent</h1>
    </div>
  )
}
