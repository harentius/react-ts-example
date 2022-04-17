import { configureStore } from '@reduxjs/toolkit'
import { userStoreReducer } from '@/modules/authentication'

export const store = configureStore({
  reducer: {
    user: userStoreReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
