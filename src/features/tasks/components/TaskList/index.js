import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import { useTaskFilters } from '../../hooks/useTaskFilters';
import TaskItem from '../TaskItem';
import FilterButtons from './FilterButtons';
import EmptyState from './EmptyState';
import ClearCompletedButton from './ClearCompletedButton';
import { styles } from './styles';

const TaskList = () => {
  const { tasks, completedTasks, activeTasks, clearCompletedTasks } = useTasks();
  const { currentFilter, filteredTasks, handleFilterChange } = useTaskFilters();

  const hasCompletedTasks = completedTasks.length > 0;

  const renderTaskItem = useCallback(({ item }) => (
    <TaskItem task={item} />
  ), []);

  const getTaskKey = useCallback((task) => task.id.toString(), []);

  const renderEmptyState = useCallback(() => (
    <EmptyState currentFilter={currentFilter} />
  ), [currentFilter]);

  return (
    <View style={styles.container}>
      <FilterButtons
        currentFilter={currentFilter}
        onFilterChange={handleFilterChange}
        allTasksCount={tasks.length}
        activeTasksCount={activeTasks.length}
        completedTasksCount={completedTasks.length}
      />

      <FlatList
        data={filteredTasks}
        renderItem={renderTaskItem}
        keyExtractor={getTaskKey}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
      />

      {hasCompletedTasks && (
        <ClearCompletedButton onPress={clearCompletedTasks} />
      )}
    </View>
  );
};

export default TaskList;
