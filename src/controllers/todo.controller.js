import * as todoService from "../services/todo.service.js"

export const getUserTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getTodosByUser(req.params.userId)
    res.json(todos)
  } catch (error) {
    next(error)
  }
}

export const getTodoById = async (req, res, next) => {
  try {
    const todo = await todoService.getTodo(req.params.id)
    res.json(todo)
  } catch (error) {
    next(error)
  }
}

export const createTodo = async (req, res, next) => {
  try {
    const todo = await todoService.createTodo(req.params.userId, req.body)
    res.status(201).json(todo)
  } catch (error) {
    next(error)
  }
}

export const updateTodo = async (req, res, next) => {
  try {
    const todo = await todoService.updateTodo(req.params.id, req.body)
    res.json(todo)
  } catch (error) {
    next(error)
  }
}

export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await todoService.deleteTodo(req.params.id)
    res.json(todo)
  } catch (error) {
    next(error)
  }
}