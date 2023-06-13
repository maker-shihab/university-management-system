import { NextFunction, Request, Response } from 'express'

const globalErrorHandaler = async (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ SokhinaError: err })
  next()
}
export default globalErrorHandaler
