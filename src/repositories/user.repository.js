import {v4 as uuidv4 } from "uuid"

let users = []

export const findAll = async () => {
  return users
}

export const findById = async (id) => {
return users.find(user => user.id === id)
}

export const create = async (data) => {
const newUser = {
    id:uuidv4(),
    ...data
  }

users.push(newUser)
return newUser
}