import React, { useEffect } from 'react'
import { useNotification } from '../../../hooks'
import { NotificationContext } from '../../contexts'
import { Notification } from '../../../widgets'

import { WarningNotificationContent } from '../../../widgets/Notification/utils'

interface IProps {
  children: React.ReactNode
}

export const NotificationProvider = ({ children }: IProps) => {
  const { type, settings, isOpen, openHandler, closeHandler } = useNotification()

  useEffect(() => {
    const timer = setTimeout(closeHandler, 6000)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <NotificationContext.Provider value={{ isOpen, openHandler, closeHandler }}>
      {children}
      <Notification isOpen={isOpen} type={type}>
        {type === 'warning' && <WarningNotificationContent text={settings.text} closeHandler={closeHandler} />}
      </Notification>
    </NotificationContext.Provider>
  )
}
