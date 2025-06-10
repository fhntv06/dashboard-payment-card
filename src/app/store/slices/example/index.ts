import { createSlice } from '@reduxjs/toolkit'
import { IExample } from './types'

const initialState: IExample = {
    field: 50,
    address: '',
}

const index = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setField(state, action) {
            state.field = action.payload.field
        },
        setAddress(state, action) {
            state.address = action.payload.address
        },
        removeField(state) {
            state.field = initialState.field
        }
    }
})

export const { setField, setAddress, removeField } = index.actions
export const exampleReducer = index.reducer
