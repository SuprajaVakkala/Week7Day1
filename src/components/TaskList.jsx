
import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useTasks();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onRemove={() => removeTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
