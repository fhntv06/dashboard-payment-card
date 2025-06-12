import { createSlice } from '@reduxjs/toolkit'
import { IUser } from './types'

const initialState: IUser = {
    id: 0,
    full_name: '',
    login: '',
    role: '',
    // Вверху данные не проверенные
    name: '',
    surname: '',
    post: '',
    nickname: '',
    avatar: '',
}

const index = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.id= action.payload.id
            state.full_name = action.payload.full_name
            state.login = action.payload.login
            state.role = action.payload.role

            state.name = action.payload.name
            state.surname = action.payload.surname
            state.post = action.payload.post
            state.nickname = action.payload.nickname
            state.avatar = action.payload.avatar
        },
    }
})

export const { setUserData } = index.actions
export const userReducer = index.reducer
