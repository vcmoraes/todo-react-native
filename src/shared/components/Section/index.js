import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Section = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Section;
