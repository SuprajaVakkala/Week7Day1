import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskProvider } from './context/TaskContext';
import AddTaskComponent from './components/AddTaskComponent';
import TaskList from './components/TaskList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaskProvider >
      <div>
        <h1>Task Management Application</h1>
        <AddTaskComponent />
        <TaskList />
      </div>
    </TaskProvider>
);


