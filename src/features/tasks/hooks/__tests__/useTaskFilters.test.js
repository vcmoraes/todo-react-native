import { renderHook, act } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { useTaskFilters } from '../useTaskFilters';
import { TASK_FILTERS } from '../../constants/filters';

const wrapper = ({ children }) => <JotaiProvider>{children}</JotaiProvider>;

describe('useTaskFilters', () => {
  it('GIVEN initial state WHEN accessing useTaskFilters THEN should return default ALL filter and empty tasks', () => {
    const { result } = renderHook(() => useTaskFilters(), { wrapper });

    expect(result.current.currentFilter).toBe(TASK_FILTERS.ALL);
    expect(result.current.filteredTasks).toEqual([]);
  });

  it('GIVEN default filter WHEN changing to ACTIVE filter THEN should update current filter', () => {
    const { result } = renderHook(() => useTaskFilters(), { wrapper });

    act(() => {
      result.current.handleFilterChange(TASK_FILTERS.ACTIVE);
    });

    expect(result.current.currentFilter).toBe(TASK_FILTERS.ACTIVE);
  });

  it('GIVEN default filter WHEN changing to COMPLETED filter THEN should update current filter', () => {
    const { result } = renderHook(() => useTaskFilters(), { wrapper });

    act(() => {
      result.current.handleFilterChange(TASK_FILTERS.COMPLETED);
    });

    expect(result.current.currentFilter).toBe(TASK_FILTERS.COMPLETED);
  });
});