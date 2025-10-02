import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ text, onPress, disabled = false }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.buttonDisabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
