import asyncHandler from 'express-async-handler'
import type { Request, Response } from 'express'
import { Goal, User } from '../models'
import { IuserRequest } from '../middleware'

/* 
  @desc     Get goals
  @route    GET /api/goal
  @access   Private
*/
export const getGoals = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const goals = await Goal.find({ user: req.user.id })

		res.json(goals)
	},
)

/* 
  @desc     Create goal
  @route    POST /api/goal
  @access   Private
*/
export const createGoal = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const { text } = req.body

		if (!text) {
			res.status(400)
			throw new Error('Please add a text filed')
		}

		const goal = await Goal.create({
			text,
			user: req.user.id,
		})

		res.json(goal)
	},
)

/* 
  @desc     Update goal
  @route    PUT /api/goal/:goalId
  @access   Private
*/
export const updateGoal = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const { goalId } = req.params

		const goal = await Goal.findById(goalId)

		if (!goal) {
			res.status(400)
			throw new Error('Goal not found')
		}

		const user = await User.findById(req.user.id)

		// Check for user
		if (!user) {
			res.status(401)
			throw new Error('User not found')
		}

		// Make sure the logged user matches the goal user
		if (goal.user.toString() !== user.id) {
			res.status(401)
			throw new Error('User not authorize')
		}

		const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
			new: true,
		})

		res.json(updatedGoal)
	},
)

/* 
  @desc     Delete goal
  @route    DELETE /api/goal/:goalId
  @access   Private
*/
export const deleteGoal = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const { goalId } = req.params

		const goal = await Goal.findById(goalId)

		if (!goal) {
			res.status(400)
			throw new Error('Goal not find')
		}

		const user = await User.findById(req.user.id)

		// Check for user
		if (!user) {
			res.status(401)
			throw new Error('User not found')
		}

		// Make sure the logged user matches the goal user
		if (goal.user.toString() !== user.id) {
			res.status(401)
			throw new Error('User not authorize')
		}

		await goal.remove()

		res.json({ id: goalId })
	},
)
