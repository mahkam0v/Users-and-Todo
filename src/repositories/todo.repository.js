import Todo from "../models/todo.model.js";

export const findAllByUserId = async (userId) => {
  return await Todo.find({ userId: userId });
}

export const findById = async (id) => {
  return await Todo.findById(id);
}

export const create = async (userId, data) => {
  const newTodo = new Todo({
    userId: userId,
    ...data
  });
  return await newTodo.save();
}

export const update = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
}

export const remove = async (id) => {
  return await Todo.findByIdAndDelete(id);
}