import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

const RadioButton = ({ selected = false, onPress, text }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.radioButton, selected && styles.radioButtonSelected]}
      onPress={onPress}
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default RadioButton;
