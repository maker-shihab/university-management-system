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
    year: z.string({
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

// Ensure 1: Route level : Update --> Give me title and code both, nither
const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesteTitles] as [string, ...string[]], {
          required_error: 'Title is required!',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Year is required!',
        })
        .optional(),
      code: z
        .enum([...academicSemesteCodes] as [string, ...string[]], {
          required_error: 'Code is required!',
        })
        .optional(),
      startMonth: z
        .enum([...academicSemesteMonths] as [string, ...string[]], {
          required_error: 'Start month is required!',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesteMonths] as [string, ...string[]], {
          required_error: 'End Month is required!',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code shuld be provided or nither!',
    }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
