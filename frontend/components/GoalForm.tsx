import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'
import { BtnBlock, Form, Group, Input } from './styles'

function GoalForm() {
	const [text, setText] = useState('')

	const dispatch = useDispatch()

	const onSubmit = (e: any) => {
		e.preventDefault()

		dispatch(createGoal({ text: text, _id: '' }))

		setText('')
	}

	return (
		<Form>
			<form onSubmit={onSubmit}>
				<Group>
					<Input
						type='text'
						id='text'
						name='text'
						value={text}
						placeholder='Enter your goal'
						onChange={e => {
							setText(e.target.value)
						}}
					/>
				</Group>
				<Group>
					<BtnBlock type='submit'>Add Goal</BtnBlock>
				</Group>
			</form>
		</Form>
	)
}

export default GoalForm
