import express from 'express'
import validateRequest from '../../middlewares/ValidateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
)

export default router
