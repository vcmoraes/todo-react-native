import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const OtherFeatureScreen = ({ activeTab }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Other Feature - Tab {activeTab}
      </Text>
    </View>
  );
};

OtherFeatureScreen.propTypes = {
  activeTab: PropTypes.number.isRequired,
};

export default OtherFeatureScreen;
