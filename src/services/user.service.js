import * as userRepository from"../repositories/user.repository.js"

export const getAllUsers = async () => {
  return await userRepository.findAll()
}

export const getUser = async (id) => {
const user = await userRepository.findById(id)

if (!user) {
const error=new Error("User not found")
error.statusCode=404
throw error
  }

return user
}

export const createUser = async (data) => {
    if (!data.name||!data.email) {
    const error=new Error("Name and email required")
    error.statusCode=400
    throw error
    }

    return await userRepository.create(data)
    }