// import express from"express"
// import userRoutes from"./routes/user.routes.js"

// const app = express()

// app.use(express.json())

// app.use("/api/users",userRoutes)

// const PORT = 3000

// app.listen(PORT, () => {
// console.log(`Server running on port ${PORT}`)
// })
import express from "express"
import userRoutes from "./routes/user.routes.js"
import todoRoutes from "./routes/todo.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes)
app.use(errorHandler)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})