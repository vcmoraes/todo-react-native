import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../shared/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.neutral300,
  },
  buttonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.roboto,
    color: colors.textWhite,
  },
  buttonTextDisabled: {
    color: colors.neutral500,
  },
});
