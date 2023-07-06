# Full-Stack Authentication Project

This is a full-stack authentication project that provides user registration, login, and logout functionality. It is built using React, Express, and MongoDB.

## Technologies Used

- React: Front-end library for building user interfaces
- Express: Node.js framework for creating the server
- MongoDB: NoSQL database for storing user data

## Modules Utilized

- Mongoose: MongoDB object modeling library
- Cors: Cross-origin resource sharing middleware for enabling client-server communication
- Cookie-parser: Middleware for parsing cookies in the server
- Dotenv: Environment variable management
- Email-validator: Library for email validation
- Bcrypt: Library for hashing passwords
- JWT: JSON Web Token library for authentication
- Nodemon: Development dependency for automatically restarting the server during development

## Key Features

- User Registration: Allows users to create an account by providing their name, email, and password.
- User Login: Allows registered users to log in with their email and password.
- User Logout: Allows logged-in users to securely log out from their account.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd full-stack-authentication`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Open the client-side application in your web browser: [http://localhost:3000](http://localhost:3000)

## Configuration

Make sure to configure the following environment variables:

- PORT: The port number on which the server will run
- MONGO_URI: MongoDB connection string
- SECRET: Secret key for JWT token generation
- CLIENT_URL: URL of the client-side application

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
