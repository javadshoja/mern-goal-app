import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteGoal } from '../features/goals/goalSlice'

function Goal({ goal }: any) {
	const dispatch = useDispatch()
	return (
		<>
			<GoalContainer>
				<div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
				<h2>{goal.text}</h2>
				<Close onClick={() => dispatch(deleteGoal(goal._id))}>X</Close>
			</GoalContainer>
		</>
	)
}

export default Goal

const GoalContainer = styled.div`
	background-color: #f4f4f4;
	margin: 10px 0;
	padding: 20px 0 10px;
	position: relative;
`
const Close = styled.button`
	position: absolute;
	top: 10px;
	right: 15px;
	cursor: pointer;
	border: none;
	background: none;
	color: red;
`
