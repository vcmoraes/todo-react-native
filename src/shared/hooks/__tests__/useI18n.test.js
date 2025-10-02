import { renderHook } from '@testing-library/react-hooks';
import { useI18n } from '../useI18n';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        'tasks.title': 'Your Tasks',
        'addTask.title': 'Add New Task',
        'addTask.label': 'Name',
        'addTask.placeholder': 'New name',
        'addTask.button': 'Add',
        'taskList.emptyState': 'No tasks yet',
        'taskList.removeButton': 'Remove item',
      };
      return translations[key] || key;
    },
  }),
}));

describe('useI18n', () => {
  it('GIVEN i18n hook WHEN initializing THEN should return translate function', () => {
    const { result } = renderHook(() => useI18n());

    expect(result.current.translate).toBeInstanceOf(Function);
  });

  it('GIVEN i18n hook WHEN translating known keys THEN should return translations', () => {
    const { result } = renderHook(() => useI18n());

    expect(result.current.translate('tasks.title')).toBeTruthy();
    expect(result.current.translate('addTask.title')).toBeTruthy();
    expect(result.current.translate('taskList.emptyState')).toBeTruthy();
  });

  it('GIVEN i18n hook WHEN translating multiple keys THEN should return different values', () => {
    const { result } = renderHook(() => useI18n());

    const title = result.current.translate('tasks.title');
    const addTask = result.current.translate('addTask.title');

    expect(title).not.toBe(addTask);
  });

  it('GIVEN i18n hook WHEN translating unknown key THEN should return key itself', () => {
    const { result } = renderHook(() => useI18n());

    expect(result.current.translate('unknown.key')).toBe('unknown.key');
  });
});
