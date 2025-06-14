import { createSlice } from '@reduxjs/toolkit'
import { ICards } from './types'

const initialState: ICards = {
  data: [
    {
      id: 0,
      ident_num: '',
      status_id: 10,
      status_name: 'Активирована',
      nominal: 0,
      dealer_id: 0,
      dealer_name: '',
      secret_code: '',
      created_dt: ''
    }
  ]
}

const index = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCardsData(state, action) {
      state.data = action.payload.data
    },
  }
})

export const {setCardsData} = index.actions
export const cardsReducer = index.reducer
