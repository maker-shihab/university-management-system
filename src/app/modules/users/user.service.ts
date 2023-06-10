import config from '../../../config/index'
import { User } from './user.model'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental ID
  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
