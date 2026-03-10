import * as userRepository from "../repositories/user.repository.js"

export const getAllUsers = async () => {
	return userRepository.findAllUsers()
}

export const getUserById = async (id) => {
	const user = await userRepository.findUserById(id)

	if (!user) {
		const error = new Error("User not found")
		error.statusCode = 404
		throw error
	}

	return user
}

export const createUser = async (data) => {
	const { name, email, age } = data

	if (!name || !email) {
		const error = new Error("Name and email required")
		error.statusCode = 400
		throw error
	}

	const existingUser = await userRepository.findUserByEmail(email)

	if (existingUser) {
		const error = new Error("Email already exists")
		error.statusCode = 400
		throw error
	}

	return userRepository.createUser({ name, email, age })
}

export const deleteUser = async (id) => {
	const deletedUser = await userRepository.deleteUserById(id)

	if (!deletedUser) {
		const error = new Error("User not found")
		error.statusCode = 404
		throw error
	}

	return deletedUser
}