import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const findLastStudentId = async () => {
  const lastStuedt = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStuedt?.id ? lastStuedt.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemister: IAcademicSemester | null
) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');

  // Increment by 1
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  // 2025
  incrementalId = `${academicSemister.year.substring(2)}${
    academicSemister.code
  }${incrementalId}`;
  return incrementalId;
};

const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementalId = `F-${incrementalId}`;

  return incrementalId;
};
