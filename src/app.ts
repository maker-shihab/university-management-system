import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandaler from './app/middlewares/globalErrorHandaler'
import usersRouter from './app/modules/user/user.router'
const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Good boy this is a hand made error!')
// })

// global Error handler
app.use(globalErrorHandaler)

export default app
