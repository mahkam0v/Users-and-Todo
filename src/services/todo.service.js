import * as todoRepository from "../repositories/todo.repository.js"
import * as userRepository from "../repositories/user.repository.js"

export const getTodosByUser = async (userId) => {
  // userRepository ichidagi nom bilan bir xil bo'lishi kerak
  const user = await userRepository.findUserById(userId) 
  if (!user) {
    const error = new Error("User not found")
    error.statusCode = 404
    throw error
  }
  return await todoRepository.findAllByUserId(userId)
}

export const getTodo = async (id) => {
  // Bu yerda foydalanuvchini emas, to'g'ridan-to'g'ri Todo-ni qidirish kerak
  const todo = await todoRepository.findById(id) 
  if (!todo) {
    const error = new Error("Todo not found")
    error.statusCode = 404
    throw error
  }
  return todo
}

export const createTodo = async (userId, data) => {
  if (!data.title) {
    const error = new Error("Title required")
    error.statusCode = 400
    throw error
  }
  return await todoRepository.create(userId, data)
}

export const updateTodo = async (id, data) => {
  const updated = await todoRepository.update(id, data)
  if (!updated) {
    const error = new Error("Todo not found")
    error.statusCode = 404
    throw error
  }
  return updated
}

export const deleteTodo = async (id) => {
  const deleted = await todoRepository.remove(id)
  if (!deleted) {
    const error = new Error("Todo not found")
    error.statusCode = 404
    throw error
  }
  return deleted
}