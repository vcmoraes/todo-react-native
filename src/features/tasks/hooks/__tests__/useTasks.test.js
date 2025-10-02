import { renderHook, act } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { useTasks } from '../useTasks';

const wrapper = ({ children }) => <JotaiProvider>{children}</JotaiProvider>;

describe('useTasks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GIVEN empty tasks list WHEN adding a new task THEN should add task to list', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('test task');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toEqual({
      id: 'fixed-id',
      text: 'test task',
      completed: false,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    });
  });

  it('GIVEN existing task WHEN editing task text THEN should update task text and timestamp', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('original text');
    });

    act(() => {
      result.current.editTask('fixed-id', 'edited text');
    });

    expect(result.current.tasks[0].text).toBe('edited text');
    expect(result.current.tasks[0].updatedAt).toBe('2024-01-01T00:00:00.000Z');
  });

  it('GIVEN incomplete task WHEN toggling completion THEN should mark task as completed and update timestamp', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('test task');
    });

    expect(result.current.tasks[0].completed).toBe(false);

    act(() => {
      result.current.toggleTaskComplete('fixed-id');
    });

    expect(result.current.tasks[0].completed).toBe(true);
    expect(result.current.tasks[0].updatedAt).toBe('2024-01-01T00:00:00.000Z');
  });

  it('GIVEN existing task WHEN deleting task THEN should remove task from list', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('test task');
    });

    const taskExists = result.current.tasks.some(task => task.id === 'fixed-id');
    expect(taskExists).toBe(true);

    act(() => {
      result.current.deleteTask('fixed-id');
    });

    const taskStillExists = result.current.tasks.some(task => task.id === 'fixed-id');
    expect(taskStillExists).toBe(false);
  });

  it('GIVEN mixed completed and active tasks WHEN clearing completed tasks THEN should remove only completed tasks', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('task 1');
      result.current.addTask('task 2');
    });

    act(() => {
      result.current.toggleTaskComplete('fixed-id');
    });

    const initialLength = result.current.tasks.length;
    const completedCount = result.current.completedTasks.length;

    act(() => {
      result.current.clearCompletedTasks();
    });

    expect(result.current.tasks.length).toBe(initialLength - completedCount);
  });

  it('GIVEN mixed completed and active tasks WHEN accessing active and completed lists THEN should return correct filtered lists', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('active task');
      result.current.addTask('completed task');
    });

    act(() => {
      result.current.toggleTaskComplete('fixed-id');
    });

    const totalTasks = result.current.tasks.length;
    const activeCount = result.current.activeTasks.length;
    const completedCount = result.current.completedTasks.length;

    expect(totalTasks).toBeGreaterThan(0);
    expect(activeCount + completedCount).toBe(totalTasks);
    expect(result.current.activeTasks.every(task => !task.completed)).toBe(true);
    expect(result.current.completedTasks.every(task => task.completed)).toBe(true);
  });

  it('GIVEN multiple tasks WHEN editing non-existent task THEN should not modify any task', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('task 1');
      result.current.addTask('task 2');
    });

    const originalTasks = [...result.current.tasks];

    act(() => {
      result.current.editTask('non-existent-id', 'new text');
    });

    expect(result.current.tasks).toEqual(originalTasks);
  });

  it('GIVEN multiple tasks WHEN toggling non-existent task THEN should not modify any task', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('task 1');
      result.current.addTask('task 2');
    });

    const originalTasks = [...result.current.tasks];

    act(() => {
      result.current.toggleTaskComplete('non-existent-id');
    });

    expect(result.current.tasks).toEqual(originalTasks);
  });

  it('GIVEN multiple tasks WHEN deleting non-existent task THEN should not modify any task', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('task 1');
      result.current.addTask('task 2');
    });

    const originalTasks = [...result.current.tasks];

    act(() => {
      result.current.deleteTask('non-existent-id');
    });

    expect(result.current.tasks).toEqual(originalTasks);
  });

  it('GIVEN completed task WHEN toggling completion again THEN should mark task as incomplete', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask('test task');
    });

    act(() => {
      result.current.toggleTaskComplete('fixed-id');
    });

    expect(result.current.tasks[0].completed).toBe(true);

    act(() => {
      result.current.toggleTaskComplete('fixed-id');
    });

    expect(result.current.tasks[0].completed).toBe(false);
    expect(result.current.tasks[0].updatedAt).toBe('2024-01-01T00:00:00.000Z');
  });
});