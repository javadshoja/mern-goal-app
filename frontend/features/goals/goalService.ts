import axios from 'axios'

interface Goal {
	text: string
}

const API_URL = '/api/goals'

// Create new goal
const createGoal = async (goalData: Goal, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.post(API_URL, goalData, config)

	return response.data
}

// Get user goals
const getGoals = async (token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL, config)

	return response.data
}

// Delete user goal
const deleteGoal = async (goalId: string, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.delete(API_URL + `/${goalId}`, config)

	return response.data
}

const goalService = {
	createGoal,
	getGoals,
	deleteGoal
}

export default goalService
