import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { tasksAtom, completedTasksAtom, activeTasksAtom } from '../atoms';

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [completedTasks] = useAtom(completedTasksAtom);
  const [activeTasks] = useAtom(activeTasksAtom);

  const addTask = useCallback((text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, [setTasks]);

  const editTask = useCallback((id, text) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, text, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }, [setTasks]);

  const toggleTaskComplete = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              updatedAt: new Date().toISOString(),
            }
          : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  const clearCompletedTasks = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, [setTasks]);

  return {
    tasks,
    completedTasks,
    activeTasks,
    addTask,
    editTask,
    toggleTaskComplete,
    deleteTask,
    clearCompletedTasks,
  };
};

