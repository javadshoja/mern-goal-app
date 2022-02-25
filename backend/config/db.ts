import mongoose from 'mongoose'

const MONGO_URI = String(process.env.MONGO_URI)

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI)

		console.log(`🥭 MangoDB connected: ${conn.connection.host}`.yellow.bold)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

export default connectDB
