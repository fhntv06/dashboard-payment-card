import { useState } from 'react';
import { IModalTypes } from '../shared/types'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<IModalTypes>('create__card');

  const openHandler = (type: IModalTypes = 'create__card') => {
    setIsOpen(true)
    setTypeModal(type)
  };

  const closeHandler = () => {
    setIsOpen(false)
    setTypeModal('create__card')
  };

  const toggleHandler = (type: IModalTypes = 'create__card') => {
    setIsOpen(!isOpen)
    setTypeModal(typeModal ? 'create__card' : type)
  };

  return {
    typeModal, isOpen, openHandler, closeHandler, toggleHandler
  };
};
