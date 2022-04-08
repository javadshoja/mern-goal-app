import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService, { LoginData, RegisterData } from './userService'

interface User {
	id: string
	name: string
	email: string
}

interface UserState {
	user: User | any
	isError: boolean
	isSuccess: boolean
	isLoading: boolean
	message: string
}

let user

if (typeof window !== 'undefined') {
	user = localStorage.getItem('user')
}

const initialState: UserState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
}
// Register user
export const register = createAsyncThunk<any, RegisterData>(
	'user/register',
	async (user, thunkAPI) => {
		try {
			return await userService.register(user)
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Login user
export const login = createAsyncThunk<any, LoginData>(
	'user/login',
	async (user, thunkAPI) => {
		try {
			return await userService.login(user)
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const logout = createAsyncThunk('user/logout', async () => {
	await userService.logout()
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		reset: state => {
			state.isError = false
			state.isLoading = false
			state.isSuccess = false
			state.message = ''
		}
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload as string
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload as string
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.user = null
			})
	}
})

export const { reset } = userSlice.actions
export default userSlice.reducer
