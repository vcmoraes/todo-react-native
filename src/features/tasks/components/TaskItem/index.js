import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useTasks } from '../../hooks/useTasks';
import TaskCheckbox from './TaskCheckbox';
import TaskContent from './TaskContent';
import TaskActions from './TaskActions';
import { styles } from './styles';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task.text);
  const { toggleTaskComplete, deleteTask, editTask } = useTasks();

  const handleToggleComplete = useCallback(() => {
    toggleTaskComplete(task.id);
  }, [toggleTaskComplete, task.id]);

  const handleDeleteTask = useCallback(() => {
    deleteTask(task.id);
  }, [deleteTask, task.id]);

  const handleSaveEdit = useCallback(() => {
    const trimmedText = editedTaskText.trim();
    const hasTextChanged = trimmedText !== task.text;
    
    if (trimmedText && hasTextChanged) {
      editTask(task.id, trimmedText);
    } else {
      setEditedTaskText(task.text);
    }
    setIsEditing(false);
  }, [editTask, editedTaskText, task.id, task.text]);

  const handleCancelEdit = useCallback(() => {
    setEditedTaskText(task.text);
    setIsEditing(false);
  }, [task.text]);

  const handleStartEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <View style={styles.container}>
      <TaskCheckbox
        isCompleted={task.completed}
        onToggle={handleToggleComplete}
      />

      <View style={styles.contentContainer}>
        <TaskContent
          isEditing={isEditing}
          isCompleted={task.completed}
          taskText={task.text}
          editedText={editedTaskText}
          onTextChange={setEditedTaskText}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          onStartEdit={handleStartEditing}
        />
      </View>

      {!isEditing && (
        <TaskActions
          onEdit={handleStartEditing}
          onDelete={handleDeleteTask}
        />
      )}
    </View>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
