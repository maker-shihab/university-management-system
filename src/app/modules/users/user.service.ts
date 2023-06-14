import config from '../../../config/index'
import ApiError from '../../../error/ApiError'
import { User } from './user.model'
import { generatedUserId } from './user.utils'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental ID
  const id = await generatedUserId()

  user.id = id

  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
