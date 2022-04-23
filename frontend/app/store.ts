import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import goalReducer from '../features/goals/goalSlice'

export function makeStore() {
	return configureStore({
		reducer: { user: userReducer, goals: goalReducer }
	})
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
