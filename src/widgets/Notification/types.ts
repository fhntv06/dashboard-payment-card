import React from "react";

export type INotificationTypes = 'warning'
export interface INotification {
  type: 'warning'
  isOpen: boolean,
  children: React.ReactNode
}