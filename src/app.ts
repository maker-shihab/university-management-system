import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandaler from './app/middlewares/globalErrorHandaler';
import router from './app/routes';
const app: Application = express();
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', userRouter);

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Good boy this is a hand made error!')
// })
app.use('/api/v1', router);
// Academic Semester
// app.use('/api/v1/academic-semesters', AcademicSemesterRoute);

// global Error handler
app.use(globalErrorHandaler);

// Handale Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
