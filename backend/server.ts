import 'dotenv/config'
import 'colorts/lib/string'
import express from 'express'
import goal from './routes/goal'
import user from './routes/user'
import { connectDB } from './config'
import { errorHandler } from './middleware'

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goal', goal)
app.use('/api/user', user)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`.cyan.bold)
})
