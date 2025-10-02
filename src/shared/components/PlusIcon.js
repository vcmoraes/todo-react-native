import React from 'react';
import { View } from 'react-native';
import IconPlus from '../../assets/icon-plus.svg';

const PlusIcon = ({ size = 24 }) => {
  return (
    <View style={{ width: size, height: size, color: '#7C8898' }}>
      <IconPlus width="100%" height="100%" />
    </View>
  );
};

export default PlusIcon;
