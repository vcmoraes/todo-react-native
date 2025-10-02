import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import ButtonTertiary from '../../../../shared/components/ButtonTertiary';
import RadioButton from '../../../../shared/components/RadioButton';
import InputText from '../../../../shared/components/InputText';
import { useI18n } from '../../../../shared/hooks/useI18n';
import { styles } from './styles';

const TaskItem = ({ task, onToggleComplete, onRemove, onEdit, removeButtonText }) => {
  const { translate } = useI18n();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef(null);

  const handleSave = useCallback(() => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      onEdit(task.id, trimmedText);
      setIsEditing(false);
    }
  }, [editText, onEdit, task.id]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleToggleComplete = useCallback(() => {
    onToggleComplete(task.id);
  }, [onToggleComplete, task.id]);

  const handleRemove = useCallback(() => {
    onRemove(task.id);
  }, [onRemove, task.id]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const renderTaskContent = () => {
    if (isEditing) {
      return (
        <View style={styles.editContainer}>
          <InputText
            ref={inputRef}
            value={editText}
            onChangeText={setEditText}
          />
        </View>
      );
    }

    return (
      <View style={styles.taskContent}>
        <RadioButton
          selected={task.completed}
          onPress={handleToggleComplete}
          text={task.text}
        />
      </View>
    );
  };

  const renderActionButtons = () => (
    <View style={styles.actionButtons}>
      <ButtonTertiary
        text={isEditing ? translate('taskItem.save') : translate('taskItem.edit')}
        onPress={isEditing ? handleSave : handleEdit}
      />
      <ButtonTertiary
        text={removeButtonText}
        onPress={handleRemove}
      />
    </View>
  );

  return (
    <View style={styles.taskItem}>
      {renderTaskContent()}
      {renderActionButtons()}
    </View>
  );
};

export default TaskItem;
