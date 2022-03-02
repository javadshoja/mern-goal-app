import asyncHandler from 'express-async-handler'
import type { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { User } from '../models'

export interface IuserRequest extends Request {
	user: any
}

interface JwtPayload {
	id: string
}

const protect = asyncHandler(
	async (req: IuserRequest, res: Response, next: NextFunction) => {
		let token

		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			try {
				// Get token from headers
				token = req.headers.authorization.split(' ')[1]

				// Verify token
				const decoded = verify(token, process.env.JWT_SECRET) as JwtPayload

				// Get user id from token
				req.user = await User.findById(decoded.id).select('-password')

				next()
			} catch (error) {
				console.log(error)
				res.status(401)
				throw new Error('Not authorize')
			}
		}

		if (!token) {
			res.status(401)
			throw new Error('Not authorize, no token')
		}
	},
)

export default protect
