# 🎓 NestJS Learning Management System (LMS)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A modern Learning Management System API built with <a href="http://nestjs.com/" target="_blank">NestJS</a> - A progressive Node.js framework for building efficient and scalable server-side applications.</p>

---

## 📋 Summary

This is a **hands-on learning project** developed to explore and understand the core concepts of **NestJS** framework. The project implements a Learning Management System API with authentication, authorization, and course management features. It serves as a practical demonstration of NestJS principles including modules, controllers, services, guards, decorators, and integration with MongoDB using Mongoose.

> **Note:** This project is created purely for learning purposes and to gain practical experience with NestJS and its ecosystem.

---

## 🚀 About NestJS

**NestJS** is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with TypeScript (while still enabling developers to code in pure JavaScript), and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

### Key Features of NestJS:

- **Modular Architecture** - Organize code into reusable modules
- **Dependency Injection** - Built-in IoC container for managing dependencies
- **TypeScript Support** - First-class TypeScript support with type safety
- **Decorator-Based** - Uses decorators for routing, validation, and more
- **Testing** - Easy to write unit and e2e tests
- **Framework Agnostic** - Works with Express or Fastify under the hood
- **Rich Ecosystem** - Extensive libraries for databases, authentication, validation, etc.

Learn more at: [https://nestjs.com](https://nestjs.com)

---

## ✨ Features

This LMS API includes the following features:

### 🔐 Authentication & Authorization

- **User Registration** - Create new user accounts with encrypted passwords
- **User Login** - JWT-based authentication system
- **Protected Routes** - Secure endpoints using JWT authentication guards
- **Role-Based Access Control (RBAC)** - Admin and User roles with permission checks
- **User Profile** - Fetch authenticated user profile information

### 📚 Course Management

- **Create Course** - Admin-only endpoint to create new courses
- **List All Courses** - Public endpoint to retrieve all courses
- **Get Single Course** - Retrieve detailed information about a specific course
- **Update Course** - Admin-only endpoint to modify course details
- **Delete Course** - Admin-only endpoint to remove courses

### 🛡️ Security

- **Password Hashing** - Using bcrypt for secure password storage
- **JWT Tokens** - Secure token-based authentication
- **Guards & Decorators** - Custom guards for authentication and role validation

---

## 🛠️ Tech Stack

### Core Technologies

- **[NestJS](https://nestjs.com/)** (v11.x) - Progressive Node.js Framework
- **[TypeScript](https://www.typescriptlang.org/)** (v5.x) - Type-safe JavaScript
- **[Node.js](https://nodejs.org/)** - JavaScript Runtime
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

### Database & ODM

- **[MongoDB](https://www.mongodb.com/)** - NoSQL Database
- **[Mongoose](https://mongoosejs.com/)** (v9.x) - MongoDB Object Modeling

### Authentication & Security

- **[@nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt)** - JWT authentication
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing

### Validation & Transformation

- **[class-validator](https://www.npmjs.com/package/class-validator)** - Decorator-based validation
- **[class-transformer](https://www.npmjs.com/package/class-transformer)** - Object transformation

### Configuration

- **[@nestjs/config](https://www.npmjs.com/package/@nestjs/config)** - Configuration management

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Jest](https://jestjs.io/)** - Testing framework

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **pnpm** (v8.x or higher) - Install with: `npm install -g pnpm`
- **MongoDB** - Running locally or a cloud instance (MongoDB Atlas)

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nestjs-lms
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   # Database Configuration
   MONGO_URI=mongodb://localhost:27017/nestjs-lms
   # OR use MongoDB Atlas:
   # MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/nestjs-lms

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=1h
   ```

   > **Important:** Replace the values with your actual MongoDB connection string and a secure JWT secret.

4. **Verify setup**

   Ensure MongoDB is running and accessible at the URI specified in `.env`

---

## 🚀 How to Run

### Development Mode

Start the application in development mode with hot-reload:

```bash
pnpm run start:dev
```

The API will be available at: `http://localhost:3000`

### Production Mode

Build and run the application in production mode:

```bash
# Build the project
pnpm run build

# Start production server
pnpm run start:prod
```

### Debug Mode

Run the application with debugging enabled:

```bash
pnpm run start:debug
```

### Other Commands

```bash
# Format code
pnpm run format

# Lint code
pnpm run lint

# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run e2e tests
pnpm run test:e2e

# Generate test coverage
pnpm run test:cov
```

---

## 📮 API Testing with Postman

This project includes a **Postman collection** for easy API testing.

### Import the Collection

1. **Locate the Postman collection file:**

   ```
   Nestjs-lms.postman_collection.json
   ```

2. **Import into Postman:**
   - Open Postman
   - Click **Import** button (top left)
   - Drag and drop the `Nestjs-lms.postman_collection.json` file
   - Or click **Upload Files** and select the file

3. **Collection includes the following requests:**
   - ✅ **Register** - Create a new user account
   - ✅ **Login** - Authenticate and get JWT token
   - ✅ **Get Profile** - Fetch authenticated user profile (requires token)
   - ✅ **Create Course** - Admin only endpoint
   - ✅ **Get One Course** - Retrieve specific course details
   - ✅ **Update Course** - Admin only endpoint

### Using the Collection

#### 1. Register a New User

- **Endpoint:** `POST /auth/register`
- **Body (JSON):**
  ```json
  {
    "fname": "John",
    "lname": "Doe",
    "email": "john.doe@email.com",
    "password": "securepassword123"
  }
  ```

#### 2. Login

- **Endpoint:** `POST /auth/login`
- **Body (JSON):**
  ```json
  {
    "email": "john.doe@email.com",
    "password": "securepassword123"
  }
  ```
- **Response:** Copy the JWT token from the response

#### 3. Get Profile (Protected Route)

- **Endpoint:** `GET /auth/profile`
- **Headers:**
  ```
  Authorization: Bearer <your-jwt-token>
  ```
- Replace `<your-jwt-token>` with the token received from login

#### 4. Working with Courses

- For admin-only endpoints (Create, Update, Delete), ensure the logged-in user has **ADMIN** role
- Public endpoints like getting all courses or a single course do not require authentication

### Tips

- After logging in, copy the JWT token and add it to the **Authorization** header for protected requests
- The token format should be: `Bearer <token>`
- Tokens expire based on `JWT_EXPIRES_IN` setting (default: 1 hour)
- For admin operations, you may need to manually set the user role to `ADMIN` in the database

---

## 📁 Project Structure

```
nestjs-lms/
├── src/
│   ├── auth/                 # Authentication module
│   │   ├── auth.controller.ts    # Auth endpoints (register, login, profile)
│   │   ├── auth.service.ts       # Auth business logic
│   │   ├── auth.guard.ts         # JWT authentication guard
│   │   ├── roles.guard.ts        # Role-based authorization guard
│   │   ├── roles.decorator.ts    # Custom roles decorator
│   │   └── constants.ts          # Auth constants
│   ├── course/               # Course management module
│   │   ├── course.controller.ts  # Course CRUD endpoints
│   │   ├── course.service.ts     # Course business logic
│   │   ├── dto/                  # Data Transfer Objects
│   │   └── schemas/              # Mongoose schemas
│   ├── user/                 # User module
│   │   ├── user.service.ts       # User business logic
│   │   ├── dto/                  # DTOs for user operations
│   │   └── schemas/              # User mongoose schema
│   ├── common/               # Shared utilities
│   ├── app.module.ts         # Root application module
│   ├── app.controller.ts     # Root controller
│   ├── app.service.ts        # Root service
│   └── main.ts               # Application entry point
├── test/                     # E2E tests
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── nest-cli.json             # NestJS CLI configuration
└── Nestjs-lms.postman_collection.json  # Postman API collection
```

---

## 🔑 Environment Variables

| Variable         | Description                | Example                                |
| ---------------- | -------------------------- | -------------------------------------- |
| `MONGO_URI`      | MongoDB connection string  | `mongodb://localhost:27017/nestjs-lms` |
| `JWT_SECRET`     | Secret key for JWT signing | `your-secret-key`                      |
| `JWT_EXPIRES_IN` | JWT token expiration time  | `1h`, `1d`, `300s`                     |

---

## 📚 API Endpoints

### Authentication Routes (`/auth`)

| Method | Endpoint         | Description       | Auth Required | Role Required |
| ------ | ---------------- | ----------------- | ------------- | ------------- |
| POST   | `/auth/register` | Register new user | ❌            | -             |
| POST   | `/auth/login`    | Login user        | ❌            | -             |
| GET    | `/auth/profile`  | Get user profile  | ✅            | -             |

### Course Routes (`/courses`)

| Method | Endpoint       | Description      | Auth Required | Role Required |
| ------ | -------------- | ---------------- | ------------- | ------------- |
| POST   | `/courses`     | Create course    | ✅            | ADMIN         |
| GET    | `/courses`     | Get all courses  | ❌            | -             |
| GET    | `/courses/:id` | Get course by ID | ❌            | -             |
| PATCH  | `/courses/:id` | Update course    | ✅            | ADMIN         |
| DELETE | `/courses/:id` | Delete course    | ✅            | ADMIN         |

---

## 🧪 Testing

```bash
# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run e2e tests
pnpm run test:e2e

# Generate test coverage report
pnpm run test:cov
```

---

## 📖 Learning Resources

- **NestJS Documentation:** [https://docs.nestjs.com](https://docs.nestjs.com)
- **NestJS Course:** [https://courses.nestjs.com](https://courses.nestjs.com)
- **MongoDB Documentation:** [https://docs.mongodb.com](https://docs.mongodb.com)
- **Mongoose Documentation:** [https://mongoosejs.com/docs](https://mongoosejs.com/docs)
- **JWT.io:** [https://jwt.io](https://jwt.io)

---

## 📝 License

This project is **UNLICENSED** and created for educational purposes only.

---

## 🤝 Acknowledgments

- **NestJS Team** - For creating an amazing framework
- **Coders Gyan** - For the learning guidance and tutorials
- **Open Source Community** - For the excellent tools and libraries

---

## 📞 Support

For questions and support:

- **NestJS Discord:** [https://discord.gg/G7Qnnhy](https://discord.gg/G7Qnnhy)
- **NestJS Documentation:** [https://docs.nestjs.com](https://docs.nestjs.com)

---

<p align="center">
  Made with ❤️ for learning NestJS
</p>
