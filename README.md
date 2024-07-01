# School Management System

This project is a school management system built using ReactJS for the frontend and Spring Boot for the backend. The application includes user login, student management, course management, and enrollment management functionalities.

## Tech Stack

### Frontend
- ReactJS
- Material-UI (MUI) for UI components
- Axios for API requests

### Backend
- Spring Boot
- Spring Security for authentication and authorization
- JWT (JSON Web Token) for secure authentication
- PostgreSQL as the database
- JPA (Java Persistence API) for ORM

## Database Design

The application uses a PostgreSQL database. Here are the main tables and their fields:

### Users Table
- id: Long (Primary Key)
- username: String (Unique)
- password: String
- role: String

### Students Table
- id: Long (Primary Key)
- first_name: String
- last_name: String
- email: String (Unique)

### Courses Table
- id: Long (Primary Key)
- name: String
- description: String

### Enrollments Table
- id: Long (Primary Key)
- student_id: Long (Foreign Key to Students Table)
- course_id: Long (Foreign Key to Courses Table)

## Features

1. **User Login**
   - Secure login with JWT-based authentication.

2. **Student Management**
   - View list of students.
   - Add new students.
   - Edit student details.
   - Delete students.

3. **Course Management**
   - View list of courses.
   - Add new courses.
   - Edit course details.
   - Delete courses.

4. **Enrollment Management**
   - View list of enrollments.
   - Enroll students in courses.
   - Manage enrollments.

## Setup and Run Locally

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Java 11
- PostgreSQL

### Step-by-Step Guide

1. **Setup PostgreSQL Database**
   - Create a new PostgreSQL database and update the `application.properties` files for each service with your credentials.
   - Alternatively, use the provided SQL scripts to set up the database tables.

2. **Run the Backend Services**
   - Navigate to each backend service directory (auth-service, student-service, course-service, enrollment-service, etc.) and run the following command:
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Run the Frontend**
   - Navigate to the `school-management-frontend` directory.
   - Install dependencies using this command:
     ```bash
     npm install
     ```
   - Run the frontend using this command:
     ```bash
     npm start
     ```

### Directory Structure

```
school-management
- discovery-server
- gateway-server
- auth-service
- student-service
- course-service
- enrollment-service
- grade-service
- school-management-frontend
```
