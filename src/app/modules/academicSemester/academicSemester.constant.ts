import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonth,
  IAcademicSemesterTitles,
} from './academicSemester.interface';

export const academicSemesteMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesteTitles: IAcademicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicSemesteCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesteTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
export const academicSemesterSearchableFields = ['title', 'code', 'year'];

export const academicSemesterFieltarableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];
