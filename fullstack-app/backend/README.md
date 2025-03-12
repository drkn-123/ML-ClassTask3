# Backend Application

This is the backend part of the fullstack application. It is built using Node.js and Express, and it connects to a database to store and retrieve input data.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd fullstack-app/backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   Update the database configuration in `src/config/database.js` with your database credentials.

4. **Run the application:**
   ```
   npm start
   ```

## API Usage

### Endpoints

- **POST /api/input**
  - Description: Create a new input entry.
  - Request Body: 
    ```json
    {
      "data": "string"
    }
    ```

- **GET /api/input**
  - Description: Retrieve all input entries.
  - Response: 
    ```json
    [
      {
        "id": "number",
        "data": "string"
      }
    ]
    ```

## Docker

To build and run the backend application using Docker, follow these steps:

1. **Build the Docker image:**
   ```
   docker build -t backend .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 5000:5000 backend
   ```

## License

This project is licensed under the MIT License.