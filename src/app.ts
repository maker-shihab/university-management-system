import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import usersRouter from './app/modules/users/user.router'
const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// Custome Error
class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // throw new ApiError(400, 'Good boy this is a hand made error!')
  next('Good boy this is error')
})

// global Error handler
app.use((err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default app
