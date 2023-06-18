import express from 'express';
import { AcademicSemesterRoute } from '../modules/academicSemester/createAcademicSemester.route';
import userRoutes from '../modules/user/user.router';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
