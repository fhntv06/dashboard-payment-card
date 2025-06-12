import { get } from '../core'

export const getUsersData = () => get(`/users/`)
export const getUserData = (userId: number) => get(`/users/${userId}`)
