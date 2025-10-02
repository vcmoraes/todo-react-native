import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { useI18n } from '../../../../shared/hooks/useI18n';

const ClearCompletedButton = ({ onPress }) => {
  const { translate } = useI18n();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.clearButton}
        onPress={onPress}
      >
        <Text style={styles.clearButtonText}>
          {translate('taskList.clearCompleted')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ClearCompletedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ClearCompletedButton;
