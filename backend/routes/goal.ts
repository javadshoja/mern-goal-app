import { Router } from 'express'
import { createGoal, deleteGoal, getGoals, updateGoal } from '../controllers'

const router = Router()

router.route('/').get(getGoals).post(createGoal)

router.route('/:goalId').put(updateGoal).delete(deleteGoal)

export default router
