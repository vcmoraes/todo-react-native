import React from 'react';
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
}) => (
  <View>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
      {required && <Text style={styles.required}>*</Text>}
    </View>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
      />
    </View>
  </View>
);

export default InputText;

