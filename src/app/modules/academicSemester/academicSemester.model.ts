import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../error/ApiError';
import {
  academicSemesteCodes,
  academicSemesteMonths,
  academicSemesteTitles,
} from './academicSemester.constant';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';

const academicSemisterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
    enum: academicSemesteTitles,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesteCodes,
  },
  startMonth: {
    type: String,
    required: true,
    enum: academicSemesteMonths,
  },
  endMonth: {
    type: String,
    required: true,
    enum: academicSemesteMonths,
  },
});

academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist!'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemisterSchema
);
