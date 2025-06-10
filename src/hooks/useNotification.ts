import { useState } from 'react';
import { INotificationTypes } from '../widgets/types'

export const useNotification = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<INotificationTypes>('warning')
  const [settings, setSettings] = useState<{ text: string }>({ text: '' })

  const openHandler = (type: INotificationTypes = 'warning', settings: { text: string } = { text: '' }) => {
    setIsOpen(true)
    setType(type)
    setSettings(settings)
  };

  const closeHandler = () => {
    setIsOpen(false)
  };

  const setSettingsHandler = (settings: { text: string } = { text: ''}) => {
    setSettings(settings)
  }

  return {
    type, settings, isOpen,
    openHandler, closeHandler, setSettingsHandler
  };
};
