import asyncHandler from 'express-async-handler'
import type { Request, Response } from 'express'
import { Goal } from '../models'

/* 
  @desc     Get goals
  @route    GET /api/goal
  @access   Private
*/
export const getGoals = asyncHandler(async (req: Request, res: Response) => {
	const goals = await Goal.find()

	res.json(goals)
})

/* 
  @desc     Create goal
  @route    POST /api/goal
  @access   Private
*/
export const createGoal = asyncHandler(async (req: Request, res: Response) => {
	const { text } = req.body

	if (!text) {
		res.status(400)
		throw new Error('Please add a text filed')
	}

	const goal = await Goal.create({
		text,
	})

	res.json(goal)
})

/* 
  @desc     Update goal
  @route    PUT /api/goal/:goalId
  @access   Private
*/
export const updateGoal = asyncHandler(async (req: Request, res: Response) => {
	const { goalId } = req.params
	console.log(goalId)
	const goal = await Goal.findById(goalId)

	if (!goal) {
		res.status(400)
		throw new Error('Goal not found')
	}

	const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
		new: true,
	})

	res.json(updatedGoal)
})

/* 
  @desc     Delete goal
  @route    DELETE /api/goal/:goalId
  @access   Private
*/
export const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
	const { goalId } = req.params

	const goal = Goal.findById(goalId)

	if (!goal) {
		res.status(400)
		throw new Error('Goal not find')
	}

	await goal.remove()

	res.json({ id: goalId })
})
