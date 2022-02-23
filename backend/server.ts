import 'dotenv/config'
import 'colorts/lib/string'
import express from 'express'
import goal from './routes/goal'
import { errorHandler } from './middleware'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goal', goal)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`.cyan.bold)
})
