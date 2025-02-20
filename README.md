

---

# Forum Application

**Created by Fabricio Braga**  
**Last Updated: February 20th, 2025**

---

## Project Overview

This is a simple **Forum Application** built with **React** for the front end and **Express** for the back end. The application allows users to:

1. **Create Topics**: Users can create new topics by providing a title, content, and their name.
2. **Reply to Topics**: Users can reply to existing topics by providing their name and reply content.
3. **List Topics**: Display all topics along with their replies.

---

## Features

- **Create a Topic**: Add a new topic with a title, content, and author name.
- **Reply to a Topic**: Add replies to existing topics.
- **List Topics**: View all topics and their replies in a clean, minimalist design.
- **Modern UI**: Smooth, rounded borders, soft shadows, and a blue/light-blue color scheme.

---

## Technologies Used

### Back End
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for handling HTTP requests and routing.
- **CORS**: Middleware for enabling cross-origin requests.
- **Body-Parser**: Middleware for parsing incoming request bodies.

### Front End
- **React**: JavaScript library for building the user interface.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: Custom styles for a modern and minimalist design.

---

## Prerequisites

Before running the project, ensure you have the following installed:

### 1. **Node.js and npm**

Node.js is a JavaScript runtime, and npm (Node Package Manager) is used to manage dependencies.

- **Install Node.js and npm**:
  - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
  - Verify the installation:
    ```bash
    node -v
    npm -v
    ```

### 2. **Git (Optional)**

Git is used for version control. You can download it from [https://git-scm.com/](https://git-scm.com/).

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. **Clone the Repositories**

Clone both the back end and front end repositories:

```bash
# Back End
git clone https://github.com/hackthegap/course-6-forum-backend.git
cd course-6-forum-backend

# Front End
git clone https://github.com/hackthegap/course-6-forum-frontend.git
cd course-6-forum-frontend
```

---

### 2. **Set Up the Back End**

1. Navigate to the back end folder:
   ```bash
   cd course-6-forum-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

   The back end server will run on `http://localhost:5001`.

---

### 3. **Set Up the Front End**

1. Navigate to the front end folder:
   ```bash
   cd course-6-forum-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

   The front end application will open automatically in your browser at `http://localhost:3000`.

---

## Project Structure

### Back End (`course-6-forum-backend`)
```
course-6-forum-backend/
├── server.js            # Main server file
├── package.json         # Back end dependencies and scripts
└── node_modules/        # Installed dependencies
```

### Front End (`course-6-forum-frontend`)
```
course-6-forum-frontend/
├── src/
│   ├── App.js           # Main React component
│   ├── App.css          # Styles for the application
│   ├── index.js         # Entry point for the React app
├── package.json         # Front end dependencies and scripts
└── node_modules/        # Installed dependencies
```

---

## Technical Details

### Back End

- **Routes**:
  - `GET /api/topics`: Fetch all topics.
  - `POST /api/topics`: Create a new topic.
  - `POST /api/topics/:id/replies`: Add a reply to a topic.

- **In-Memory Data Store**:
  - Topics and replies are stored in an in-memory array (no database).

### Front End

- **Components**:
  - `App.js`: Main component that handles topic creation, replies, and displaying topics.
  - `App.css`: Custom styles for a modern and minimalist design.

- **State Management**:
  - Uses React's `useState` and `useEffect` hooks for managing state and side effects.

- **API Integration**:
  - Uses Axios to interact with the back end API.

---

## Available Scripts

### Back End
- **`node server.js`**: Starts the Express server.

### Front End
- **`npm start`**: Runs the React app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the app from Create React App (advanced use only).

---

## Learning Objectives

This project covers the following key concepts:

1. **Back End Development**:
   - Building a RESTful API with Express.
   - Handling HTTP requests and responses.
   - Using middleware for CORS and body parsing.

2. **Front End Development**:
   - Building a React application with functional components.
   - Managing state with React hooks (`useState`, `useEffect`).
   - Making API requests with Axios.

3. **Asynchronous Programming**:
   - Using `async/await` for handling asynchronous operations.

4. **Modern UI Design**:
   - Creating a clean and minimalist user interface with CSS.

---

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- This project was created as part of a course to teach back-end and front-end development with Node.js, Express, and React.
- Special thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for inspiration on API design.

---

## Questions?

If you have any questions or need further assistance, feel free to reach out to the instructor or open an issue in the repository.

---
