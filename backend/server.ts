import 'dotenv/config'
import 'colorts/lib/string'
import express from 'express'
import cors from 'cors'
import goal from './routes/goal'
import user from './routes/user'
import { connectDB } from './config'
import { errorHandler } from './middleware'

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({ origin: process.env.ENDPOINT || 'http://localhost:3000' }))

app.use('/api/goals', goal)
app.use('/api/user', user)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`.cyan.bold)
})
