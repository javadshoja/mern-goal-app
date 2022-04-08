import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { RootState } from '../app/store'
import { reset, register } from '../features/user/userSlice'
import { Header, Form, Group, Input, BtnBlock } from '../components/styles'
import Spinner from '../components/Spinner'

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	const router = useRouter()
	const dispatch = useDispatch()

	const { name, email, password, password2 } = formData

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
		if (password !== password2) {
			toast.error('Passwords do not match')
		} else {
			const userData = {
				name,
				email,
				password
			}
			dispatch(register(userData))
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<Header>
				<h1>Create Account</h1>
				<p>Get started by creating your new account</p>
			</Header>

			<Form>
				<form onSubmit={onSubmit}>
					<Group>
						<Input
							type='text'
							id='name'
							name='name'
							value={name}
							placeholder='Enter your name'
							onChange={onChange}
						/>
					</Group>
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
						<Input
							type='password'
							id='password2'
							name='password2'
							value={password2}
							placeholder='Confirm password'
							onChange={onChange}
						/>
					</Group>
					<Group>
						<BtnBlock type='submit'>Submit</BtnBlock>
					</Group>
				</form>
			</Form>
		</>
	)
}

export default Register
