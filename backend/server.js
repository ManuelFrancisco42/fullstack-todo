import express from "express"
import cors from "cors"
import "colors"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import userRoute from "./routes/authRoutes.js"
import todosRoute from "./routes/todoRoutes.js"
dotenv.config()


const app = express()


app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use("/api/auth", userRoute)
app.use("/api/todos", todosRoute)

const PORT = process.env.PORT || 4000


const startApp = async () => {
  try {
    await connectDB()
    
app.listen(PORT, () => {
  console.log(
    `Server is Up and Running on port http://localhost:${PORT}☑️`.green.bold
      .underline,
  )
})
  } catch (error) {
    console.log(error);
  }
}

startApp()