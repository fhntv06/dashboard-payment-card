import { createSlice } from '@reduxjs/toolkit'
import { IUser } from './types'

const initialState: IUser = {
    data: {
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
}

const index = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.data = action.payload.data
        },
    }
})

export const { setUserData } = index.actions
export const userReducer = index.reducer
