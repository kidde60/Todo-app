# To-Do App

A simple, responsive To-Do List application built with React, using the Context API for state management, and styled with Tailwind CSS. The app allows users to add, edit, delete, and search for tasks, with data persistence using localStorage.

# Features

Add Tasks: Add new tasks to your to-do list.
Edit Tasks: Edit existing tasks.
Delete Tasks: Remove tasks from your list.
Search Tasks: Filter tasks by text.
Responsive Design: The app is fully responsive and works on both mobile and desktop devices.
Data Persistence: Tasks are stored in the browser's localStorage, so they persist even after refreshing the page.

# Technologies Used

React: A JavaScript library for building user interfaces.
Context API: A way to manage global state in React.

Tailwind CSS: A utility-first CSS framework for building custom designs without having to leave your HTML.
localStorage: For persisting tasks data between page reloads.
Installation
To run this app locally, follow these steps:

1. Clone the repository
   bash
   Copy code
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
2. Install dependencies
   Make sure you have Node.js installed. Then, run the following command to install the dependencies:

npm install 3. Start the development server
Run the following command to start the development server:

4. npm run dev
   This will launch the app in your default browser at http://localhost:3000.

5. npm test
   This will run the tests

# Usage

Add a Task: Type your task into the input field and click "Add Task" or press Enter.
Edit a Task: Click on an existing task to edit it.
Delete a Task: Click on the "Delete" button next to a task to remove it from the list.
Search Tasks: Use the search input to filter tasks by text.
File Structure

src/
├── components/
│ ├── TaskForm.js # Form for adding new tasks
│ ├── TaskItem.js # Individual task item component
│ └── TaskList.js # Displays the list of tasks
├── context/
│ └── TaskContext.js # Context provider and logic for tasks
├── App.js # Main application component
└── main.js # Entry point of the app

# Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
