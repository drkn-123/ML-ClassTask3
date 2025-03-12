# Fullstack Application

This is a fullstack application consisting of a backend and a frontend. The application allows users to input data through a simple input field, which is then stored in a database.

## Project Structure

```
fullstack-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── index.js
│   │   ├── models
│   │   │   └── index.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── config
│   │       └── database.js
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── InputField.js
│   │   └── index.js
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fullstack-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend at `http://localhost:3000`.

### Backend

The backend is built using Node.js and Express. It connects to a database and provides an API for the frontend to interact with.

- **Entry Point**: `backend/src/app.js`
- **API Routes**: Defined in `backend/src/routes/index.js`
- **Database Connection**: Managed in `backend/src/config/database.js`

### Frontend

The frontend is built using React. It provides a user interface for inputting data.

- **Main Component**: `frontend/src/App.js`
- **Input Field Component**: `frontend/src/components/InputField.js`

### Docker

The application is containerized using Docker. Each service (backend and frontend) has its own Dockerfile.

### License

This project is licensed under the MIT License.