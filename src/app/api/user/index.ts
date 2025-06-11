import { get } from '../core'

export const getUserData = (userId: number) => get(`/api/dashboard/user-info/${userId}`)
