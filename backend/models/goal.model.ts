import { Schema, models, model } from 'mongoose'
import { User } from './user.model'

interface Goal {
	user: User
	text: string
}

const goalSchema = new Schema<Goal>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'Please add a text value'],
		},
	},
	{
		timestamps: true,
	},
)

export default models.Goal || model<Goal>('Goal', goalSchema, 'goal')
