# Stock Application

A monorepo project for a stock management application built with TypeScript, using Lerna for package management.

## Project Structure

## Prerequisites

- Node.js (v16 or higher recommended)
- pnpm (`npm install -g pnpm`)
- Lerna (`pnpm install -g lerna`)

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd stock-app
```

1. Install dependencies:

```bash
pnpm install
```

## Development

You can run different parts of the application using the following commands:

```bash
# Start the API server in development mode
pnpm dev:api

# Start the web application in development mode
pnpm dev:web

# Run both frontend and backend simultaneously
pnpm dev
```

## Technology Stack

### Backend (API)

- Node.js + Express
- TypeScript
- PostgreSQL
- TypeORM
- JWT Authentication

### Frontend (Web)

- React (presumably)
- TypeScript

## Available Scripts

- `pnpm dev:api`: Runs the API server in development mode
- `pnpm dev:web`: Runs the web application in development mode
- `pnpm build`: Builds all packages
- `pnpm test`: Runs tests across all packages

## Environment Variables

### API Server

Create a `.env` file in the `packages/api` directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Your chosen license]
