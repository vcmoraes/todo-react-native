import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';

const InputText = ({
  label,
  required = false,
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  returnKeyType = 'done'
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default InputText;

