import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { tasksAtom } from '../atoms';

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const addTask = useCallback((text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, [setTasks]);

  const toggleTaskComplete = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, [setTasks]);

  const removeTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  const editTask = useCallback((id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  }, [setTasks]);

  return {
    tasks,
    addTask,
    toggleTaskComplete,
    removeTask,
    editTask,
  };
};
