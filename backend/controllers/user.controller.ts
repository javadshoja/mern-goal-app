import asyncHandler from 'express-async-handler'
import type { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { compare, genSalt, hash } from 'bcrypt'
import { User } from '../models'
import type { IuserRequest } from '../middleware'

// Generate JWT
const generateToken = (id) => {
	return sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '14d',
	})
}

/* 
  @desc     Register user
  @route    POST /api/user
  @access   Public
*/
export const registerUser = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, email, password } = req.body

		if (!name || !email || !password) {
			res.status(400)
			throw new Error('Pleas fill all fields')
		}

		// Check user exists
		const userExist = await User.findOne({
			email,
		})

		if (userExist) {
			res.status(400)
			throw new Error('User already exist')
		}

		// Hash password
		const salt = await genSalt(10)

		const hashedPassword = await hash(password, salt)

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		})

		if (user) {
			res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user.id),
			})
		} else {
			res.status(400)
			throw new Error('Invalid user data')
		}
	},
)

/* 
  @desc     Authenticate a user
  @route    POST /api/user/login
  @access   Public
*/
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user.id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid credentials')
	}
})

/* 
  @desc     Get user data
  @route    GET /api/user/me
  @access   Private
*/
export const getMe = asyncHandler(async (req: IuserRequest, res: Response) => {
	const { id } = req.user

	const { _id, name, email } = await User.findById(id)

	res.json({ id: _id, name, email })
})
