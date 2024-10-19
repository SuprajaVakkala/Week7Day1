
import React from 'react';

const TaskItem = ({ task, onToggle, onRemove }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={onToggle}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
