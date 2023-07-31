import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { academicSemesterController } from './academicSemeste.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';
// import { UserController } from './user.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);

router.get('/:id', academicSemesterController.getSingleSemester);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
);

router.delete('/:id', academicSemesterController.deleteSemester);

router.get('/', academicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
