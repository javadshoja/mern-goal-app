import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { title } from 'process'
import { RootState } from '../../app/store'
import goalService from './goalService'

interface Goal {
	_id: String
	text: string
}

interface GoalState {
	goals: Goal[]
	isError: boolean
	isSuccess: boolean
	isLoading: boolean
	message: string
}

const initialState: GoalState = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
}

// Create goal
export const createGoal = createAsyncThunk<any, Goal, { state: RootState }>(
	'goals/create',
	async (goalData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().user.user.token

			return await goalService.createGoal(goalData, token)
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

// Get goals
export const getGoals = createAsyncThunk<Goal[], void, { state: RootState }>(
	'goals/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().user.user.token

			return await goalService.getGoals(token)
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

export const deleteGoal = createAsyncThunk<any, string, { state: RootState }>(
	'goals/delete',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().user.user.token
			return await goalService.deleteGoal(id, token)
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

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		reset: state => initialState
	},
	extraReducers: builder => {
		builder
			.addCase(createGoal.pending, state => {
				state.isLoading = true
			})
			.addCase(createGoal.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.goals.push(action.payload)
			})
			.addCase(createGoal.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload as string
			})
			.addCase(getGoals.pending, state => {
				state.isLoading = true
			})
			.addCase(getGoals.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.goals = action.payload
			})
			.addCase(getGoals.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload as string
			})
			.addCase(deleteGoal.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteGoal.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.goals = state.goals.filter(goal => goal._id != action.payload.id)
			})
			.addCase(deleteGoal.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload as string
			})
	}
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
