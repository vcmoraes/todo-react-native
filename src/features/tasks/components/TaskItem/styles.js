import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing.lg,
    marginVertical: 6,
    borderRadius: spacing.md,
    ...shadows.sm,
  },
  
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  
  checkboxCompleted: {
    backgroundColor: colors.primary,
  },
  
  checkmark: {
    color: colors.white,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
  
  contentContainer: {
    flex: 1,
  },
  
  textContainer: {
    flex: 1,
  },
  
  taskText: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textDisabled,
  },
  
  editContainer: {
    flex: 1,
  },
  
  editInput: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: spacing.sm,
    padding: spacing.sm,
    marginBottom: 4,
  },
  
  cancelButton: {
    alignSelf: 'flex-start',
  },
  
  cancelButtonText: {
    color: colors.primary,
    fontSize: typography.fontSize.xs,
  },
  
  actions: {
    flexDirection: 'row',
    marginLeft: spacing.sm,
  },
  
  editButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  
  editButtonText: {
    fontSize: typography.fontSize.lg,
    color: colors.primary,
  },
  
  deleteButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  
  deleteButtonText: {
    fontSize: typography.fontSize.xl,
    color: colors.danger,
  },
});
