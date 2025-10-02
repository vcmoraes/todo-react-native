import React, { useState, forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';

const InputText = forwardRef(({
  label,
  required = false,
  placeholder,
  value,
  onChangeText,
  onSubmitEditing
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>

      <TextInput
        ref={ref}
        style={[
          styles.input, 
          isFocused && styles.inputFocused
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="done"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  );
});

export default InputText;

