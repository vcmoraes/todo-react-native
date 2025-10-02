import { renderHook } from '@testing-library/react-hooks';
import { useAtom } from 'jotai';
import { tasksAtom } from '../tasksAtom';

jest.mock('jotai', () => ({
  useAtom: jest.fn(),
}));

describe('tasksAtom', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GIVEN empty atom WHEN accessing tasks THEN should return empty array', () => {
    const mockSetAtom = jest.fn();
    useAtom.mockReturnValue([[], mockSetAtom]);

    const { result } = renderHook(() => useAtom(tasksAtom));
    const [tasks] = result.current;

    expect(tasks).toEqual([]);
  });

  it('GIVEN tasks in atom WHEN accessing tasks THEN should return provided tasks', () => {
    const mockTasks = [
      { id: '1', text: 'Test task', completed: false },
      { id: '2', text: 'Another task', completed: true },
    ];
    const mockSetAtom = jest.fn();
    useAtom.mockReturnValue([mockTasks, mockSetAtom]);

    const { result } = renderHook(() => useAtom(tasksAtom));
    const [tasks] = result.current;

    expect(tasks).toEqual(mockTasks);
    expect(tasks).toHaveLength(2);
  });

  it('GIVEN empty atom WHEN setting new tasks THEN should call setAtom with new tasks', () => {
    const mockSetAtom = jest.fn();
    useAtom.mockReturnValue([[], mockSetAtom]);

    const { result } = renderHook(() => useAtom(tasksAtom));
    const [, setTasks] = result.current;

    const newTask = { id: '1', text: 'New task', completed: false };
    setTasks([newTask]);

    expect(mockSetAtom).toHaveBeenCalledWith([newTask]);
  });
});
