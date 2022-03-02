import { Router } from 'express'
import { createGoal, deleteGoal, getGoals, updateGoal } from '../controllers'
import { protect } from '../middleware'

const router = Router()

router.route('/').get(protect, getGoals).post(protect,createGoal)

router.route('/:goalId').put(protect, updateGoal).delete(protect,deleteGoal)

export default router
