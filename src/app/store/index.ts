import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer, userReducer } from './slices'

const store = configureStore({
    reducer: {
      userData: userReducer,
      cardsData: cardsReducer,
    }
})

export default store
