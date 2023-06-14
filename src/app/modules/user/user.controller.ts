import { RequestHandler } from 'express-serve-static-core'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      sucess: true,
      message: 'User Created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser,
}
