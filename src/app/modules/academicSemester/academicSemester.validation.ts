import { z } from 'zod';
import {
  academicSemesteCodes,
  academicSemesteMonths,
  academicSemesteTitles,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesteTitles] as [string, ...string[]], {
      required_error: 'Title is required!',
    }),
    year: z.number({
      required_error: 'Year is required!',
    }),
    code: z.enum([...academicSemesteCodes] as [string, ...string[]], {
      required_error: 'Code is required!',
    }),
    startMonth: z.enum([...academicSemesteMonths] as [string, ...string[]], {
      required_error: 'Start month is required!',
    }),
    endMonth: z.enum([...academicSemesteMonths] as [string, ...string[]], {
      required_error: 'End Month is required!',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
