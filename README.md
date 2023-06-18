# University Management System

## My Introduction:

- My name is Shihab. I completed my CSE diploma in 2020 and I am currently pursuing a BSc in CSE at European University. Additionally, I work as a freelancer on renowned platforms like Fiverr and Upwork. With expertise in frontend development, I have successfully designed and developed over 200 projects using popular technologies such as HTML, CSS (Bootstrap, Tailwind CSS, Material CSS), and JavaScript (jQuery, React.js, Next.js). As I progressed in my career, I expanded my skill set to become a proficient full stack developer. This portfolio showcases my proficiency in both frontend and backend development.

## Project Introduction

- The University Management System is a comprehensive software solution designed to streamline and automate various administrative and academic processes within a university or educational institution. This system aims to enhance efficiency, accuracy, and communication among students, administrators, and faculty members, leading to improved overall management of the university.

## Requirement Analysis:

- University Management System by Programming Hero" is a comprehensive project that I have developed and included in my portfolio. This system encompasses various features designed to streamline the management processes within a university setting. Some notable features of the University Management System include:

  - Student Management: A module to manage student records, including their personal information, enrollment details, academic performance, and attendance.

  - Faculty Management: An intuitive interface to manage faculty members, their profiles, teaching assignments, and performance evaluations.
  - By incorporating the University Management System into my portfolio, I can demonstrate my skills in developing robust web applications, utilizing technologies such as HTML, CSS, JavaScript, and possibly backend frameworks like Node.js. The system showcases my ability to design intuitive user interfaces, implement database management, and create seamless user experiences for efficient university management.

## Authentication service

We are building a university management system where we have three types of roles such as Admin , Student , Faculty.

### Functional Requirements:

### Student:

- Students can log in and log out.
- Students can update their profile information.
- Students can update specific fields in their profile.
- Students can pay their tuition fees online or offline.
- Students can view their transaction history.
- Students can enroll in a semester.
- Students can enroll in offered courses for a specific semester.
- Students can view their class routines.
- Students can evaluate their teachers.
- Students can view the notice board and upcoming events.
- Students can view their results on a semester-wise basis.

### Admin

- Admin can log in and log out
- Admin can mange and update theri profile
- Admin can only update certain fields
- Admin can manage user accounts
  - Block/Unblock
  - Change Password
  - Forcefully Log out
- Admin can multiple process
  - Semister
  - Offerd Course
  - Section
  - Feculty
  - Stuednt
  - Building
  - Room
  - Payment
  - Permision
  - Activiy

### Faculty

- Faculty can login and log out
- Faculty can manage and update their profile
- Faculty can only update certain field
- Faculty can manage user account
- Faculty can manage user gread
- Access to Academic and personal informaiton
- Faculty can manage their lecture resourse

## Models

A database model is a conceptual representation of how data is organized and structured within a database system. It defines the logical design and relationships between data entities, attributes, and tables. Database models serve as blueprints for creating and managing databases effectively

### Permission

- title

### UserPermission

- permissionId
- userId

### User

- id [ Generated ID , same as student id]
- role [ Append From Backend , user.service.ts]
- password [ default Password | , give password from frontend ]
- createdAt [mongoose by default]
- updatedAt [mongoose by default]
- student [reference ] (\_id mongoose )
- || admin [reference ] (\_id mongoose )
- || faculty [reference ] (\_id mongoose )

### Students

- id [ Generated ID, same as user id ]
- name
  - firstName
  - middleName
  - lastName
- Gender → enum → male || female
- dateOfBirth 24-04-1998
- emial
- contactNo
- emergencyContactNo
- presentAddress
- premanentAddress
- bloodGroup → enum →
- guardian
  - fatherOccupation
  - fatherName
  - fatherContactNo
  - motherName
  - motherOccupation
  - motherContactNo
  - address
- localGuardianc

  - name
  - occupation
  - contactNo
  - address

- academicSemester [ Reference]
- academicDepartment [Reference]
- academicFaculty [Reference]

```json
- Sample Data:
{
    "password": "123456",

    "student": {
        "name": {
            "firstName": "Mezbaul",
            "lastName": "Abedin",
            "middleName": "Forhan"
        },
        "dateOfBirth": "24-04-1998",
        "gender": "male",
        "bloodGroup": "O+",
        "email": "user@gmail.com",
        "contactNo": "user_4",
        "emergencyContactNo": "01600000000",
        "presentAddress": "CTG",
        "permanentAddress": "CTG",
        "academicFaculty": "6473b67a123df7493739e2a0",
        "academicDepartment": "6473badee8ddae33f1cf0a3f",
        "academicSemester": "647a5d967a96742c8cb4b8d2",
        "guardian": {
            "fatherName": "MD.ABBU",
            "fatherOccupation": "Retired Teacher",
            "fatherContactNo": "01600000000",
            "motherName": "Mrs.Ammu",
            "motherOccupation": "Housewife",
            "motherContactNo": "01600000000",
            "address": "CTG"
        },
        "localGuardian": {
            "name": "Zahid Hasan",
            "occupation": "Service Holder",
            "contactNo": "01600000000",
            "address": "Dhaka"
        }

      }
}
```

### Faculty

- id (custom generated by generateFacultyId)
- name
  - firstName
  - middleName
  - lastName
- gender ('male'|'female')
- dateOfBirth
- email
- contactNo
- emargencyContactNo
- presentAddress
- permanentAddress
- bloodGroup ( 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-')
- designation (Professor, Lecturer)
- academicDepartment (Department of Computer Science & Engineering) [reference]
- academicFaculty( Faculty of Science and Engineering ) [reference]

### Admins

- id
- name
  - firstName
  - middleName
  - lastName
- gender
- dateOfBirth
- email
- contactNo
- emargencyContactNo
- department
- designation

### Academic Semester:

- title
- year
- code
- startMonth
- endMonth

### Sample Date:

- Autumn | Summer | Fall
- 2023
- 01 | 02 | 03
- January
- May

1. Create Faculty
2. Read Faculty (Pagination)
3. Update faculty
4. Delete Faculty

### Academic Department

- title
- cacademicFaculty (Reference)

```json
- Sample  Data:

{
     title: ‘Department of Computer Science’,
     academicFaculty: 64820578aeaa15acb6483dc5
}
- After Populate:
{
     title: ‘Department of Computer Science’,
     academicFaculty: {
        _id: 64820578aeaa15acb6483dc5,
        title:’Faculty of Science and Engineering’
       }
}

```

5. Create Faculty
6. Read Faculty (Pagination)
7. Update faculty
8. Delete Faculty

### API END POINTS:

API endpoints are specific URLs or routes that applications use to interact with an API. They define the entry points for accessing and manipulating data or services provided by the API. Each endpoint corresponds to a specific operation or resource, allowing developers to send requests and receive responses.

### User

- users/create-student (POST)
- users/create-faculty (POST)
- users/create-admin (POST)
- users/my-profile (GET)
- users/:id (GET)
- users/:id (PATCH)
- cuser/:id (DELETE)
- users/:id/force-logged-out
- users?page=1&limit=10 (GET)
- users/:id/available-permissions?page=1&limit=10 (GET)
- users/:id/assigned-permissions?page=1&limit=10 (GET)
- users/:id/assign-permissions (POST)
- users/:id/remove-permissions (POST)

### Student:

- students (GET)
- students?page=1&limit=10 (GET) (Pagination and Filtering)
- students/:id (GET)
- students/:id (PATCH)
- students/:id (DELETE)

### Faculty:

- faculties?page=1&limit=10&sortBy=gender&sortOrder=desc (GET)
- faculties?searchTerm=lec (GET)
- faculties/:id (GET)
- faculties/:id (PATCH)
- faculties/:id ( DELETE)

### Admin

- admins?page=1&limit=10 (GET)
- admins/:id (GET)
- admin/:id (PATCH)

### Permission:

- permissions?page=1&limit=10 (GET)
- permissions (POST)
- permissions/:id (GET)
- permissions/:id (PATCH)
- permissions/:id (DELETE)

### Auth:

- auth/login (POST)
- auth/refresh-token (POST)
- auth/change-password (POST)
- auth/forgot-password(POST)
- auth/reset-password (POST)

### Academic Semester:

- academic-semesters/create-semester (POST)
- academic-semesters (GET) ( paginated)
- academic-semesters/:id (GET)
- academic-semesters/:id (PATCH)
- academic-semesters/:id (DELETE)

## ERD Digram:
