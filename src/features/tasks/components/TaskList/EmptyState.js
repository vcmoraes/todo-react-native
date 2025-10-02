import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';
import { TASK_FILTERS } from '../../constants/filters';

const EMPTY_STATE_KEYS = {
  [TASK_FILTERS.ALL]: 'taskList.emptyStates.noTasks',
  [TASK_FILTERS.ACTIVE]: 'taskList.emptyStates.noActive',
  [TASK_FILTERS.COMPLETED]: 'taskList.emptyStates.noCompleted',
};

const EmptyState = ({ currentFilter }) => {
  const { translate } = useI18n();
  const emptyStateKey = EMPTY_STATE_KEYS[currentFilter] || EMPTY_STATE_KEYS[TASK_FILTERS.ALL];

  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{translate(emptyStateKey)}</Text>
    </View>
  );
};

EmptyState.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default EmptyState;
