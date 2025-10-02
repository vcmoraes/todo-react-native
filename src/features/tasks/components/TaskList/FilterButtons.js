import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';
import { TASK_FILTERS } from '../../constants/filters';

const FilterButtons = ({ 
  currentFilter, 
  onFilterChange, 
  allTasksCount, 
  activeTasksCount, 
  completedTasksCount 
}) => {
  const { translate } = useI18n();

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          currentFilter === TASK_FILTERS.ALL && styles.filterButtonActive
        ]}
        onPress={() => onFilterChange(TASK_FILTERS.ALL)}
      >
        <Text style={[
          styles.filterText,
          currentFilter === TASK_FILTERS.ALL && styles.filterTextActive
        ]}>
          {translate('taskList.filters.all')} ({allTasksCount})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterButton,
          currentFilter === TASK_FILTERS.ACTIVE && styles.filterButtonActive
        ]}
        onPress={() => onFilterChange(TASK_FILTERS.ACTIVE)}
      >
        <Text style={[
          styles.filterText,
          currentFilter === TASK_FILTERS.ACTIVE && styles.filterTextActive
        ]}>
          {translate('taskList.filters.active')} ({activeTasksCount})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterButton,
          currentFilter === TASK_FILTERS.COMPLETED && styles.filterButtonActive
        ]}
        onPress={() => onFilterChange(TASK_FILTERS.COMPLETED)}
      >
        <Text style={[
          styles.filterText,
          currentFilter === TASK_FILTERS.COMPLETED && styles.filterTextActive
        ]}>
          {translate('taskList.filters.done')} ({completedTasksCount})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

FilterButtons.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  allTasksCount: PropTypes.number.isRequired,
  activeTasksCount: PropTypes.number.isRequired,
  completedTasksCount: PropTypes.number.isRequired,
};

export default FilterButtons;
