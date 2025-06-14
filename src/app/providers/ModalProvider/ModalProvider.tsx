import React from 'react'

import { useModal } from '../../../hooks'
import { ModalContext } from '../../contexts'
import { Modal, CreateCardModal } from '../../../widgets'

interface IProps {
  children: React.ReactNode
}

export const ModalProvider = ({ children }: IProps) => {
  const { typeModal, isOpen, openHandler, closeHandler, toggleHandler } = useModal()

  return (
    <ModalContext.Provider value={{ isOpen, openHandler, closeHandler, toggleHandler }}>
      {children}
      <Modal isOpen={isOpen} typeModal={typeModal} closeHandler={closeHandler}>
        {typeModal === 'create__card' && <CreateCardModal closeHandler={closeHandler} />}
      </Modal>
    </ModalContext.Provider>
  )
}
