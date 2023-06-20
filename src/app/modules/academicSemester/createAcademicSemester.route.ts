import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { academicSemesterController } from './academicSemeste.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

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
router.patch('/:id', academicSemesterController.updateSemester);

router.get('/', academicSemesterController.getAllSemesters);

export const AcademicSemesterRoute = router;
