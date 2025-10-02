import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    alignItems: 'center',
  },
  
  input: {
    flex: 1,
    backgroundColor: colors.gray100,
    borderRadius: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: typography.fontSize.md,
    maxHeight: 100,
    color: colors.textPrimary,
  },
  
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.md,
    ...shadows.primary,
  },
  
  addButtonDisabled: {
    backgroundColor: colors.gray300,
    ...shadows.none,
  },
  
  addButtonText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: typography.fontWeight.light,
  },
});
