import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

export function makeStore() {
	return configureStore({
		reducer: { user: userReducer }
	})
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
