import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
  radioButtonSelected: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  text: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.inter,
    color: colors.textPrimary,
    flex: 1,
    flexWrap: 'wrap',
  },
});
