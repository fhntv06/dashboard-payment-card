import React from 'react'

import { useModal } from '../../../hooks'
import { ModalContext } from '../../contexts'
import { ModalWrapper, CreateCardModal } from '../../../shared'

interface IProps {
  children: React.ReactNode
}

export const ModalProvider = ({ children }: IProps) => {
  const { typeModal, isOpen, openHandler, closeHandler, toggleHandler } = useModal()

  return (
    <ModalContext.Provider value={{ isOpen, openHandler, closeHandler, toggleHandler }}>
      {children}
      <ModalWrapper isOpen={isOpen} typeModal={typeModal} closeHandler={closeHandler}>
        {typeModal === 'create__card' && <CreateCardModal />}
      </ModalWrapper>
    </ModalContext.Provider>
  )
}
