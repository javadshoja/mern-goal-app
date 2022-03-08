import { useState } from 'react'
import { Header, Form, Group, Input, BtnBlock } from '../components/styles'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const { email, password } = formData

	const onChange = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
	const onSubmit = (e: any) => {
		e.preventDefault()
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
