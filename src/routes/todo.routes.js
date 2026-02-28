import { Router } from "express"
import {
  getUserTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller.js"

const router = Router()

router.get("/user/:userId", getUserTodos)
router.get("/:id", getTodoById)
router.post("/user/:userId", createTodo)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)

export default router