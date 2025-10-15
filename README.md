# Todo App

A simple and efficient Todo application built with React and Vite. This application allows users to manage their daily tasks with features like adding, completing, and deleting tasks, as well as filtering tasks by their status.

## Features

- Add new tasks with descriptive names
- Mark tasks as complete/incomplete
- Delete tasks you no longer need
- Filter tasks by status:
  - All: View all tasks
  - Open: View only incomplete tasks
  - Completed: View only completed tasks
- Responsive design that works on desktop, tablet, and mobile devices
- Local storage persistence so your tasks are saved between sessions
- Clean and intuitive user interface

## Technologies Used

- React (Functional Components with Hooks)
- Vite (Fast build tool and development server)
- JavaScript (ES6+ features)
- CSS3 (Custom styling with responsive design)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Reddy076/Todo-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Todo-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Tabs.jsx
│   │   ├── TodoCard.jsx
│   │   ├── TodoInput.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── fanta.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. **Task Management**: Users can add new tasks using the input field at the bottom of the app.
2. **Task Completion**: Each task can be marked as complete using the "Done" button.
3. **Task Deletion**: Tasks can be removed entirely using the "Delete" button.
4. **Filtering**: The tab navigation allows users to view:
   - All tasks
   - Open tasks (incomplete)
   - Completed tasks
5. **Persistence**: All tasks are saved to the browser's local storage, so they persist between sessions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.