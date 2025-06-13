import { get, post } from '../core'

export const getCardData = (id: string) => get(`/cards/${id}`)
export const getCardsData = (page: number = 1, per_page: number = 3) => get(`/cards?_page=${page}&_per_page=${per_page}`)
export const postCardsData = (data: {}) => post('/api/dashboard/cards/', data)
