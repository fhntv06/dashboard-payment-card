import React from 'react'
import { motion, useWillChange } from 'framer-motion'
import classNames from 'classnames/bind'

import styles from './Modal.module.scss'

import { IModalTypes } from './types'
import { AnimationWrapper, Icon } from '../../shared'

const cx = classNames.bind(styles)

interface IProps {
  isOpen: boolean,
  typeModal: IModalTypes,
  closeHandler: () => void,
  children: React.ReactNode
}

export const Modal = ({
  isOpen = false,
  closeHandler,
  children
}: IProps) => {
  const willChange = useWillChange()

  return (
    <AnimationWrapper
      isOpen={isOpen}
      style={{willChange}}
      className={cx('modal')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: .1,
        duration: .3,
        ease: 'easeInOut'
      }}
    >
      <motion.div
        className={cx('blur')}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
         delay: .1,
         duration: .3,
         ease: 'easeInOut',
        }}
        style={{willChange}}
        onClick={closeHandler}
      />
      <div className={cx('wrapper')}>
        <button className={cx('button-close')} onClick={closeHandler}>
          {/* <Icon name='cross' size='medium' />         */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4639 0.547684C23.2969 0.379224 23.0981 0.245508 22.879 0.154255C22.6599 0.0630024 22.425 0.0160199 22.1877 0.0160199C21.9503 0.0160199 21.7154 0.0630024 21.4963 0.154255C21.2772 0.245508 21.0784 0.379224 20.9114 0.547684L12.0059 9.46013L3.08909 0.547684C2.92328 0.376271 2.72498 0.23957 2.50576 0.145549C2.28654 0.0515294 2.05079 0.00207285 1.81225 6.37739e-05C1.57371 -0.0019453 1.33716 0.0435333 1.11639 0.133848C0.895613 0.224162 0.69504 0.357504 0.526361 0.5261C0.357682 0.694695 0.224273 0.895169 0.133914 1.11583C0.0435549 1.3365 -0.00194626 1.57293 6.38055e-05 1.81135C0.00207387 2.04977 0.0515549 2.28541 0.145622 2.50452C0.239688 2.72363 0.376458 2.92183 0.547956 3.08756L9.46481 12.0114L0.547956 20.9124C0.376458 21.0782 0.239688 21.2764 0.145622 21.4955C0.0515549 21.7146 0.00207387 21.9502 6.38055e-05 22.1886C-0.00194626 22.4271 0.0435549 22.6635 0.133914 22.8842C0.224273 23.1048 0.357682 23.3053 0.526361 23.4739C0.69504 23.6425 0.895613 23.7758 1.11639 23.8662C1.33716 23.9565 1.57371 24.0019 1.81225 23.9999C2.05079 23.9979 2.28654 23.9485 2.50576 23.8545C2.72498 23.7604 2.92328 23.6237 3.08909 23.4523L12.0059 14.5513L20.9228 23.4523C21.2598 23.7906 21.7174 23.9813 22.1951 23.9824C22.6727 23.9835 23.1312 23.7948 23.4697 23.458C23.8082 23.1212 23.9989 22.6638 24 22.1864C24.0011 21.709 23.8124 21.2508 23.4754 20.9124L14.5471 12L23.4639 3.099C24.1622 2.38967 24.1622 1.25702 23.4639 0.547684Z" fill="white"/>
          </svg>
        </button>
        {children}
      </div>
    </AnimationWrapper>
  )
}
