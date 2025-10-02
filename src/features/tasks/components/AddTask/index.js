import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import { styles } from './styles';
import { colors } from '../../../../shared/theme';
import { useI18n } from '../../../../shared/hooks/useI18n';
import { isIOS } from '../../../../shared/constants/platforms';

const KEYBOARD_BEHAVIOR = {
  IOS: 'padding',
  DEFAULT: 'height',
};

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useTasks();
  const { translate } = useI18n();

  const isTaskTextValid = taskText.trim().length > 0;

  const handleAddTask = useCallback(() => {
    if (isTaskTextValid) {
      addTask(taskText.trim());
      setTaskText('');
    }
  }, [addTask, taskText, isTaskTextValid]);

  const keyboardBehavior = isIOS ? KEYBOARD_BEHAVIOR.IOS : KEYBOARD_BEHAVIOR.DEFAULT;

  return (
    <KeyboardAvoidingView
      behavior={keyboardBehavior}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={translate('addTask.placeholder')}
          placeholderTextColor={colors.textPlaceholder}
          value={taskText}
          onChangeText={setTaskText}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
          multiline
          accessibilityLabel={translate('accessibility.taskInput')}
        />
        <TouchableOpacity
          style={[styles.addButton, !isTaskTextValid && styles.addButtonDisabled]}
          onPress={handleAddTask}
          disabled={!isTaskTextValid}
          accessibilityLabel={translate('accessibility.addTaskButton')}
        >
          <Text style={styles.addButtonText}>{translate('addTask.addButton')}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTask;
