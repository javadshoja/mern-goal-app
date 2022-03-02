import { Schema, models, model } from 'mongoose'

export interface User {
	name: string
	email: string
	password: string
}

const userSchema = new Schema<User>(
	{
		name: {
			type: String,
			required: [true, 'Please add a username'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{
		timestamps: true,
	},
)

export default models.User || model<User>('User', userSchema, 'user')
