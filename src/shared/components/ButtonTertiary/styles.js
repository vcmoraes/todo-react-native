import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../shared/theme';

export const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
  buttonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.inter,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
