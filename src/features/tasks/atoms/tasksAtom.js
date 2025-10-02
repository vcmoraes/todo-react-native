import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { TASK_FILTERS } from '../constants/filters';

export const tasksAtom = atomWithStorage('tasks', []);

export const taskFilterAtom = atom(TASK_FILTERS.ALL);

export const filteredTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  const filter = get(taskFilterAtom);

  switch (filter) {
    case TASK_FILTERS.ACTIVE:
      return tasks.filter((task) => !task.completed);
    case TASK_FILTERS.COMPLETED:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
});

export const activeTasksAtom = atom((get) => 
  get(tasksAtom).filter((task) => !task.completed)
);

export const completedTasksAtom = atom((get) => 
  get(tasksAtom).filter((task) => task.completed)
);

