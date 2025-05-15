# Node.js Docker API

This project is a simple Dockerized Node.js API server that demonstrates how to set up a basic Express application with Docker.

## Project Structure

```
nodejs-docker-api
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes
│   │   └── index.js         # API routes definition
│   └── controllers
│       └── api.js           # API logic and handlers
├── Dockerfile                # Dockerfile for building the image
├── docker-compose.yml        # Docker Compose configuration
├── .dockerignore             # Files to ignore in Docker build
├── package.json              # npm configuration and dependencies
├── .env.example              # Example environment variables
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd nodejs-docker-api
   ```

2. Build the Docker image:

   ```
   docker-compose build
   ```

3. Start the application:

   ```
   docker-compose up
   ```

### Usage

Once the application is running, you can access the API at `http://localhost:3000`. You can test the API endpoints using tools like Postman or curl.

### API Endpoints

- `GET /api/hello`: Returns a simple greeting message.

### Environment Variables

You can create a `.env` file based on the `.env.example` file to configure environment variables for your application.

### License

This project is licensed under the MIT License.