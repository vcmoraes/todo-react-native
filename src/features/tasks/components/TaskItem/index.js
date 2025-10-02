import React from 'react';
import { View } from 'react-native';
import ButtonTertiary from '../../../../shared/components/ButtonTertiary';
import RadioButton from '../../../../shared/components/RadioButton';
import { styles } from './styles';

const TaskItem = ({ task, onToggleComplete, onRemove, removeButtonText }) => (
  <View style={styles.taskItem}>
    <RadioButton
      selected={task.completed}
      onPress={() => onToggleComplete(task.id)}
      text={task.text}
    />
    <ButtonTertiary
      text={removeButtonText}
      onPress={() => onRemove(task.id)}
    />
  </View>
);

export default TaskItem;
