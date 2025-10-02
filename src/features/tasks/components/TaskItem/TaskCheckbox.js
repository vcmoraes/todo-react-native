import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';

const TaskCheckbox = ({ isCompleted, onToggle }) => {
  const { translate } = useI18n();

  return (
    <TouchableOpacity
      style={[styles.checkbox, isCompleted && styles.checkboxCompleted]}
      onPress={onToggle}
      accessibilityLabel={translate('accessibility.completeTaskCheckbox')}
    >
      {isCompleted && (
        <Text style={styles.checkmark}>{translate('taskItem.checkmark')}</Text>
      )}
    </TouchableOpacity>
  );
};

TaskCheckbox.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TaskCheckbox;
