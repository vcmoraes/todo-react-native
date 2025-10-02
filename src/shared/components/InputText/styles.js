import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../shared/theme';

export const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.roboto,
    color: colors.textPrimary,
  },
  required: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.roboto,
    color: colors.error,
    marginLeft: 2,
  },
  input: {
    backgroundColor: colors.neutral50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.roboto,
    color: colors.textPlaceholder,
    minHeight: 48,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
});
