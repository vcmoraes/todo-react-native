import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';

const TaskActions = ({ onEdit, onDelete }) => {
  const { translate } = useI18n();

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={onEdit}
        accessibilityLabel={translate('accessibility.editTaskButton')}
      >
        <Text style={styles.editButtonText}>
          {translate('taskItem.editIcon')}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        accessibilityLabel={translate('accessibility.deleteTaskButton')}
      >
        <Text style={styles.deleteButtonText}>
          {translate('taskItem.deleteIcon')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

TaskActions.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskActions;
