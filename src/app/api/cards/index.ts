import { get, post } from '../core'

export const getCardsData = () => get('/cards/', )
export const postCardsData = (data: {}) => post('/api/dashboard/cards/', data)
