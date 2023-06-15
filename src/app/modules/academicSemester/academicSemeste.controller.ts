import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemeste.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      sucess: true,
      message: 'Academic Created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const academicSemesterController = {
  createSemester,
};
