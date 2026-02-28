import * as userService from "../services/user.service.js"

export const getUsers = async (req,res,next) => {
try {
const users = await userService.getAllUsers()
res.json(users)
  }catch (error) {
next(error)
  }
}

export const getUserById = async (req,res,next) => {
try {
const user = await userService.getUser(req.params.id)
res.json(user)
  }catch (error) {
next(error)
  }
}

export const createUser = async (req,res,next) => {
try {
const newUser = await userService.createUser(req.body)
res.status(201).json(newUser)
  }catch (error) {
next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
};