import { getDefaultStore } from 'jotai';
import { tasksAtom, taskFilterAtom, filteredTasksAtom, activeTasksAtom, completedTasksAtom } from '../tasksAtom';
import { TASK_FILTERS } from '../../constants/filters';

describe('tasks atoms', () => {
  let store;

  beforeEach(() => {
    store = getDefaultStore();
  });

  describe('tasksAtom', () => {
    it('GIVEN initial state WHEN accessing tasksAtom THEN should return empty array', () => {
      expect(store.get(tasksAtom)).toEqual([]);
    });
  });

  describe('taskFilterAtom', () => {
    it('GIVEN initial state WHEN accessing taskFilterAtom THEN should return ALL filter', () => {
      expect(store.get(taskFilterAtom)).toBe(TASK_FILTERS.ALL);
    });
  });

  describe('filteredTasksAtom', () => {
    const tasks = [
      { id: '1', text: 'task 1', completed: false },
      { id: '2', text: 'task 2', completed: true },
      { id: '3', text: 'task 3', completed: false },
    ];

    it('GIVEN tasks with mixed completion status WHEN filter is ALL THEN should return all tasks', () => {
      store.set(tasksAtom, tasks);
      store.set(taskFilterAtom, TASK_FILTERS.ALL);
      expect(store.get(filteredTasksAtom)).toEqual(tasks);
    });

    it('GIVEN tasks with mixed completion status WHEN filter is ACTIVE THEN should return only active tasks', () => {
      store.set(tasksAtom, tasks);
      store.set(taskFilterAtom, TASK_FILTERS.ACTIVE);
      expect(store.get(filteredTasksAtom)).toEqual([tasks[0], tasks[2]]);
    });

    it('GIVEN tasks with mixed completion status WHEN filter is COMPLETED THEN should return only completed tasks', () => {
      store.set(tasksAtom, tasks);
      store.set(taskFilterAtom, TASK_FILTERS.COMPLETED);
      expect(store.get(filteredTasksAtom)).toEqual([tasks[1]]);
    });
  });

  describe('activeTasksAtom', () => {
    it('GIVEN tasks with mixed completion status WHEN accessing activeTasksAtom THEN should return only non-completed tasks', () => {
      const tasks = [
        { id: '1', text: 'task 1', completed: false },
        { id: '2', text: 'task 2', completed: true },
        { id: '3', text: 'task 3', completed: false },
      ];
      store.set(tasksAtom, tasks);
      expect(store.get(activeTasksAtom)).toEqual([tasks[0], tasks[2]]);
    });
  });

  describe('completedTasksAtom', () => {
    it('GIVEN tasks with mixed completion status WHEN accessing completedTasksAtom THEN should return only completed tasks', () => {
      const tasks = [
        { id: '1', text: 'task 1', completed: false },
        { id: '2', text: 'task 2', completed: true },
        { id: '3', text: 'task 3', completed: false },
      ];
      store.set(tasksAtom, tasks);
      expect(store.get(completedTasksAtom)).toEqual([tasks[1]]);
    });
  });
});