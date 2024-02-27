import { configureStore } from '@reduxjs/toolkit'
import profileListReducer from './profileListSlice'

export const store = configureStore({
    reducer: {
        profileList: profileListReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch