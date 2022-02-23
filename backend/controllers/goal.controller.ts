import asyncHandler from 'express-async-handler'

import type { Request, Response } from 'express'

/* 
  @desc     Get goals
  @route    GET /api/goal
  @access   Private
*/
export const getGoals = asyncHandler(async (req: Request, res: Response) => {
	res.json({ message: 'get goals' })
})

/* 
  @desc     Create goal
  @route    POST /api/goal
  @access   Private
*/
export const createGoal = asyncHandler(async (req: Request, res: Response) => {
	const { body } = req
	console.log(body)
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add a text filed')
	}
	res.json({ message: 'create goal' })
})

/* 
  @desc     Update goal
  @route    PUT /api/goal/:goalId
  @access   Private
*/
export const updateGoal = asyncHandler(async (req: Request, res: Response) => {
	const { goalId } = req.params
	res.json({ message: `update goal ${goalId}` })
})

/* 
  @desc     Delete goal
  @route    DELETE /api/goal/:goalId
  @access   Private
*/
export const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
	const { goalId } = req.params
	res.json({ message: `delete goal ${goalId}` })
})
