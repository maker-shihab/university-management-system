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

- id
- role
- password
- createdAt
- updatedAt
- studentId | adminId | faculyId

### Students

- id
- name
  - firstName
  - middleName
  - lastName
- gender
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- email
- presentAddress
- premanentAddress
- department
- subject

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

### Faculty

- id
- name
  - firstName
  - middleName
  - lastName
- email
- gender
- dateOfBirth
- contactNo
- emargencyContactNo
- department
- faculty
- designation

### API END POINTS:

API endpoints are specific URLs or routes that applications use to interact with an API. They define the entry points for accessing and manipulating data or services provided by the API. Each endpoint corresponds to a specific operation or resource, allowing developers to send requests and receive responses.

### User

- user/create-student(POST)
- user/create-faculty(POST)
- user/create-admin(POST)
- user/my-profile(GET)
- user/:id(GET)
- user/:id(PATCH)
- user/:(DELETE)
- user/:id/force-loged-out
- user?pages=1&limt=10(GET)
- user/:id/available-permission?page=1&limt=10(GET)
- user/:id/assigned-permission?page=1&limt=10(GET)
- users/:id/assign-permissions (POST)
- users/:id/remove-permissions (POST)

## ERD Digram:
