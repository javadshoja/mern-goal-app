import axios from 'axios'

export interface RegisterData {
	name: string
	email: string
	password: string
}

export interface LoginData {
	email: string
	password: string
}

const API_URL = '/api/user'

// Register user
const register = async (userData: RegisterData) => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

// Login user
const login = async (userData: LoginData) => {
	const response = await axios.post(API_URL + '/login', userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

// Logout user
const logout = () => {
	localStorage.removeItem('user')
}

const userService = {
	register,
	login,
	logout
}

export default userService
