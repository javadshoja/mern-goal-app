import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { RootState } from '../app/store'
import { Header, Form, Group, Input, BtnBlock } from '../components/styles'
import { login, reset } from '../features/user/userSlice'
import Spinner from '../components/Spinner'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const router = useRouter()
	const dispatch = useDispatch()

	const { email, password } = formData

	const user = useSelector((state: RootState) => state.user.user)
	const isError = useSelector((state: RootState) => state.user.isError)
	const isSuccess = useSelector((state: RootState) => state.user.isSuccess)
	const isLoading = useSelector((state: RootState) => state.user.isLoading)
	const message = String(useSelector((state: RootState) => state.user.message))

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		if (isSuccess || user) {
			router.push('/')
		}

		dispatch(reset())
	}, [user, isError, isSuccess, message, router, dispatch])

	const onChange = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
	const onSubmit = (e: any) => {
		e.preventDefault()

		const userData = {
			email,
			password
		}
		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<Header>
				<h1>Welcome Back!</h1>
				<p>We are happy to have you back</p>
			</Header>

			<Form>
				<form onSubmit={onSubmit}>
					<Group>
						<Input
							type='email'
							id='email'
							name='email'
							value={email}
							placeholder='Enter your email'
							onChange={onChange}
						/>
					</Group>
					<Group>
						<Input
							type='password'
							id='password'
							name='password'
							value={password}
							placeholder='Enter password'
							onChange={onChange}
						/>
					</Group>
					<Group>
						<BtnBlock type='submit'>Login</BtnBlock>
					</Group>
				</form>
			</Form>
		</>
	)
}

export default Login
