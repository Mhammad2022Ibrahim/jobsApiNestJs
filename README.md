# Jobs API

A RESTful API for job management built with NestJS, Prisma, and JWT authentication. This API allows users to create accounts, authenticate, and manage job listings with full CRUD operations.

## Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 👤 **User Management** - User registration with password validation
- 💼 **Job Management** - Full CRUD operations for job listings
- 🛡️ **Password Security** - Bcrypt hashing with strong password requirements
- 📊 **Database** - SQLite with Prisma ORM
- ✅ **Validation** - Input validation with class-validator
- 🏗️ **Clean Architecture** - Modular NestJS structure

## Tech Stack

- **Framework**: NestJS
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT + Passport
- **Validation**: class-validator
- **Password Hashing**: bcrypt
- **Language**: TypeScript

## Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── dto/             # Data transfer objects
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   └── jwt-auth.guard.ts
├── jobs/                # Jobs module
│   ├── dto/             # Data transfer objects
│   ├── jobs.controller.ts
│   ├── jobs.service.ts
│   └── jobs.module.ts
├── prisma/              # Database service
│   └── prisma.service.ts
└── main.ts              # Application entry point

prisma/
├── schema.prisma        # Database schema
├── migrations/          # Database migrations
└── dev.db              # SQLite database file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd jobs-api
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
```
Update `.env` with your configuration:
```env
DATABASE_URL="file:./dev.db"
SECRET_KEY="your-jwt-secret-key"
```

4. **Set up the database**:
```bash
npx prisma generate
npx prisma db push
```

5. **Run the application**:
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Login user |
| GET | `/auth/users` | Get all users |

### Jobs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/jobs` | Create a new job |
| GET | `/jobs` | Get all jobs |
| GET | `/jobs/:id` | Get job by ID |
| PATCH | `/jobs/:id` | Update job |
| DELETE | `/jobs/:id` | Delete job |

## API Usage Examples

### Register User
```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "mhammad",
    "password": "Password123!"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "mhammad",
    "password": "Password123!"
  }'
```

### Create Job
```bash
curl -X POST http://localhost:3000/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "title": "Software Developer",
    "description": "Full-stack developer position",
    "company": "Tech Corp",
    "location": "Remote",
    "employmentType": "Full-time"
  }'
```

## Password Requirements

- Minimum 6 characters
- At least one capital letter
- At least one symbol (!@#$%^&*(),.?":{}|<>)

## Database Schema

### User Model
```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  createdAt DateTime @default(now())
}
```

### Job Model
```prisma
model Job {
  id             Int      @id @default(autoincrement())
  title          String
  description    String?
  company        String
  location       String
  employmentType String
  createdAt      DateTime @default(now())
}
```

## Development

```bash
# Watch mode
npm run start:dev

# Run tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Lint code
npm run lint

# Format code
npm run format
```

## Database Management

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# View database
npx prisma studio

# Reset database
npx prisma db push --force-reset
```
