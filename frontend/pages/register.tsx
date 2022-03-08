import { useState, useEffect } from 'react'
import { Header, Form, Group, Input, BtnBlock } from '../components/styles'

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	const { name, email, password, password2 } = formData

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
