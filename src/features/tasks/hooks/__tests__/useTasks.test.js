import { renderHook, act } from '@testing-library/react';
import { useTasks } from '../useTasks';
import { useAtom } from 'jotai';

jest.mock('jotai', () => ({
  useAtom: jest.fn(),
}));
jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mock-uuid'),
}));

describe('useTasks', () => {
  const mockSetTasks = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAtom.mockReturnValue([[], mockSetTasks]);
  });

  it('GIVEN empty tasks atom WHEN initializing hook THEN should return empty tasks and functions', () => {
    const { result } = renderHook(() => useTasks());

    expect(result.current.tasks).toEqual([]);
    expect(result.current.addTask).toBeInstanceOf(Function);
    expect(result.current.toggleTaskComplete).toBeInstanceOf(Function);
    expect(result.current.removeTask).toBeInstanceOf(Function);
  });

  it('GIVEN empty tasks WHEN adding new task THEN should call setTasks with function', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Test task');
    });

    expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
  });

  it('GIVEN empty tasks WHEN adding new task THEN should create task with correct properties', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Test task');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall([]);

    expect(newTasks).toHaveLength(1);
    expect(newTasks[0]).toEqual({
      id: 'mock-uuid',
      text: 'Test task',
      completed: false,
    });
  });

  it('GIVEN tasks with incomplete task WHEN toggling completion THEN should call setTasks with function', () => {
    const mockTasks = [
      { id: '1', text: 'Test task', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.toggleTaskComplete('1');
    });

    expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
  });

  it('GIVEN tasks with incomplete task WHEN toggling completion THEN should mark task as completed', () => {
    const mockTasks = [
      { id: '1', text: 'Test task', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.toggleTaskComplete('1');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].completed).toBe(true);
  });

  it('GIVEN tasks with completed task WHEN toggling completion THEN should mark task as incomplete', () => {
    const mockTasks = [
      { id: '1', text: 'Test task', completed: true },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.toggleTaskComplete('1');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].completed).toBe(false);
  });

  it('GIVEN tasks with multiple tasks WHEN toggling completion THEN should only toggle specified task', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.toggleTaskComplete('1');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].completed).toBe(true);
    expect(newTasks[1].completed).toBe(true);
  });

  it('GIVEN tasks with existing task WHEN removing task THEN should call setTasks with function', () => {
    const mockTasks = [
      { id: '1', text: 'Test task', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.removeTask('1');
    });

    expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
  });

  it('GIVEN tasks with existing task WHEN removing task THEN should remove correct task', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.removeTask('1');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks).toHaveLength(1);
    expect(newTasks[0].id).toBe('2');
  });

  it('GIVEN tasks with multiple tasks WHEN adding new task THEN should add to beginning of list', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('New Task');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks).toHaveLength(2);
    expect(newTasks[0].text).toBe('New Task');
    expect(newTasks[1].text).toBe('Task 1');
  });

  it('GIVEN tasks with existing task WHEN editing task THEN should call setTasks with function', () => {
    const mockTasks = [
      { id: '1', text: 'Original text', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.editTask('1', 'Updated text');
    });

    expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
  });

  it('GIVEN tasks with existing task WHEN editing task THEN should update task text', () => {
    const mockTasks = [
      { id: '1', text: 'Original text', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.editTask('1', 'Updated text');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].text).toBe('Updated text');
    expect(newTasks[0].completed).toBe(false);
  });

  it('GIVEN tasks with multiple tasks WHEN editing task THEN should only edit specified task', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.editTask('1', 'Updated Task 1');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].text).toBe('Updated Task 1');
    expect(newTasks[1].text).toBe('Task 2');
  });

  it('GIVEN tasks with task WHEN editing non-existent task THEN should not modify any task', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.editTask('non-existent', 'Updated text');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].text).toBe('Task 1');
  });

  it('GIVEN tasks with task WHEN removing non-existent task THEN should not modify tasks', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.removeTask('non-existent');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks).toHaveLength(1);
    expect(newTasks[0].text).toBe('Task 1');
  });

  it('GIVEN tasks with task WHEN toggling non-existent task THEN should not modify any task', () => {
    const mockTasks = [
      { id: '1', text: 'Task 1', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.toggleTaskComplete('non-existent');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].completed).toBe(false);
  });

  it('GIVEN empty tasks WHEN adding empty text task THEN should still add task', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall([]);

    expect(newTasks).toHaveLength(1);
    expect(newTasks[0].text).toBe('');
  });

  it('GIVEN tasks WHEN editing with empty text THEN should update task with empty text', () => {
    const mockTasks = [
      { id: '1', text: 'Original text', completed: false },
    ];
    useAtom.mockReturnValue([mockTasks, mockSetTasks]);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.editTask('1', '');
    });

    const setTasksCall = mockSetTasks.mock.calls[0][0];
    const newTasks = setTasksCall(mockTasks);

    expect(newTasks[0].text).toBe('');
  });
});
