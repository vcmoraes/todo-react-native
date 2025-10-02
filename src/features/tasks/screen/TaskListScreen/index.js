import React, { useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import { useI18n } from '../../../../i18n';
import TaskItem from '../../components/TaskItem';
import AddTask from '../../components/AddTask';
import { styles } from './styles';
import Section from '../../../../shared/components/Section';

const TaskListScreen = () => {
  const { tasks, toggleTaskComplete, removeTask, editTask } = useTasks();
  const { translate } = useI18n();

  const getTaskKey = useCallback((task) => task.id.toString(), []);

  const renderTaskItem = useCallback(({ item }) => (
    <TaskItem
      task={item}
      onToggleComplete={toggleTaskComplete}
      onRemove={removeTask}
      onEdit={editTask}
      removeButtonText={translate('taskList.removeButton')}
    />
  ), [toggleTaskComplete, removeTask, editTask, translate]);

  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{translate('taskList.emptyState')}</Text>
    </View>
  ), [translate]);

  const renderHeader = useCallback(() => (
    <Section title={translate('tasks.title')} />
  ), [translate]);

  const renderFooter = useCallback(() => (
    <>
      <Section title={translate('addTask.title')} />
      <AddTask />
    </>
  ), [translate]);

  const renderSeparator = useCallback(() => (
    <View style={styles.divider} />
  ), []);

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={getTaskKey}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmptyState}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TaskListScreen;
