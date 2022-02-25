import { Schema, models, model } from 'mongoose'

interface Goal {
	text: string
}

const goalSchema = new Schema<Goal>(
	{
		text: {
			type: String,
			required: [true, 'Please add a text value'],
		},
	},
	{
		timestamps: true,
	},
)

export default models.Goal || model<Goal>('Goal', goalSchema,'goal')
