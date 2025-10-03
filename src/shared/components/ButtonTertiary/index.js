import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const ButtonTertiary = ({ text, onPress, variant = 'primary' }) => {
  const variantStyle = styles[`buttonText${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.buttonText, variantStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

ButtonTertiary.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'danger']),
};

ButtonTertiary.Danger = (props) => <ButtonTertiary {...props} variant="danger" />;

export default ButtonTertiary;

