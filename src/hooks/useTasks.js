
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const useTasks = () => {
  const { tasks, addTask, removeTask, toggleTask } = useContext(TaskContext);

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
  };
};

export default useTasks;
