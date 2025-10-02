import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { taskFilterAtom, filteredTasksAtom } from '../atoms';

export const useTaskFilters = () => {
  const [currentFilter, setCurrentFilter] = useAtom(taskFilterAtom);
  const [filteredTasks] = useAtom(filteredTasksAtom);

  const handleFilterChange = useCallback((filter) => {
    setCurrentFilter(filter);
  }, [setCurrentFilter]);

  return {
    currentFilter,
    filteredTasks,
    handleFilterChange,
  };
};
