import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import { useI18n } from '../../../../shared/hooks/useI18n';
import Button from '../../../../shared/components/Button';
import InputText from '../../../../shared/components/InputText';
import { styles } from './styles';

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

  return (
    <View style={styles.container}>
      <InputText
        label={translate('addTask.label')}
        required={true}
        placeholder={translate('addTask.placeholder')}
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAddTask}
        returnKeyType="done"
      />

      <Button
        text={translate('addTask.button')}
        onPress={handleAddTask}
        disabled={!isTaskTextValid}
      />
    </View>
  );
};

export default AddTask;
