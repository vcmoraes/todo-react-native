import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';

const TaskContent = ({
  isEditing,
  isCompleted,
  taskText,
  editedText,
  onTextChange,
  onSave,
  onCancel,
  onStartEdit,
}) => {
  const { translate } = useI18n();

  if (isEditing) {
    return (
      <View style={styles.editContainer}>
        <TextInput
          style={styles.editInput}
          value={editedText}
          onChangeText={onTextChange}
          onBlur={onSave}
          onSubmitEditing={onSave}
          autoFocus
          multiline
        />
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>
            {translate('taskItem.editCancel')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.textContainer}
      onLongPress={onStartEdit}
      activeOpacity={0.7}
    >
      <Text
        style={[styles.taskText, isCompleted && styles.taskTextCompleted]}
        numberOfLines={3}
      >
        {taskText}
      </Text>
    </TouchableOpacity>
  );
};

TaskContent.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  taskText: PropTypes.string.isRequired,
  editedText: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onStartEdit: PropTypes.func.isRequired,
};

export default TaskContent;
