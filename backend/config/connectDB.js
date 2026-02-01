import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MONGODB connected successfully☑️'.green.bold.underline)
  } catch (error) {
    console.log("MONGODB fail to connect", error)
    process.exit(1)
  }
}

export default connectDB