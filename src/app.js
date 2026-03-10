import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/user.routes.js"
import todoRoutes from "./routes/todo.routes.js" // 1. Todo routerni import qiling

dotenv.config()

const app = express()

app.use(express.json())

// 2. Yo'nalishlarni (Routes) ulanishi
app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes) // 3. Todo-lar uchun alohida prefix qo'shing


const PORT = process.env.PORT || 3000

const startServer = async () => {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()