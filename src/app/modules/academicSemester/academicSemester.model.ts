import { Schema, model } from 'mongoose';
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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemisterSchema
);
