import * as todoRepository from "../repositories/todo.repository.js"
import * as userRepository from "../repositories/user.repository.js"

export const getTodosByUser = async (userId) => {
  const user = await userRepository.findById(userId)
  if (!user) {
    const error = new Error("User not found")
    error.statusCode = 404
    throw error
  }
  return await todoRepository.findAllByUserId(userId)
}

export const getTodo = async (id) => {
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