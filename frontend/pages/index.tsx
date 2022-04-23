import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import GoalForm from '../components/GoalForm'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
import Spinner from '../components/Spinner'
import { Heading } from '../components/styles'
import { getGoals, reset } from '../features/goals/goalSlice'

const Home: NextPage = () => {
	const dispatch = useDispatch()

	const user = useSelector((state: RootState) => state.user.user)
	const goals = useSelector((state: RootState) => state.goals.goals)
	const isError = useSelector((state: RootState) => state.goals.isError)
	const isLoading = useSelector((state: RootState) => state.goals.isLoading)
	const message = useSelector((state: RootState) => state.goals.message)
	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getGoals())

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	if (isLoading) return <Spinner />

	return (
		<>
			{user ? (
				<>
					<Heading>
						<h1>Welcome {user && user.name}</h1>
						<p>Your Goals</p>
					</Heading>

					<GoalForm />

					<section>
						{goals.length > 0 ? (
							<Goals goals={goals} />
						) : (
							<h3>You have not set any goals</h3>
						)}
					</section>
				</>
			) : (
				<>
					<Hero />
				</>
			)}
		</>
	)
}

export default Home
