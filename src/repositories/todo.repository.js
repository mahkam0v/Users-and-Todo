import { v4 as uuidv4 } from "uuid"

let todos = []

export const findAllByUserId = async (userId) => {
  return todos.filter(todo => todo.userId === userId)
}

export const findById = async (id) => {
  return todos.find(todo => todo.id === id)
}

export const create = async (userId, data) => {
  const newTodo = {
    id: uuidv4(),
    userId,
    ...data
  }
  todos.push(newTodo)
  return newTodo
}

export const update = async (id, data) => {
  const todo = todos.find(t => t.id === id)
  if (!todo) return null
  Object.assign(todo, data)
  return todo
}

export const remove = async (id) => {
  const index = todos.findIndex(t => t.id === id)
  if (index === -1) return null
  return todos.splice(index, 1)[0]
}