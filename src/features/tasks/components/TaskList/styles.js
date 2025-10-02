import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  filterContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  filterButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.xs,
    borderRadius: spacing.sm,
    backgroundColor: colors.gray100,
    alignItems: 'center',
  },
  
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  
  filterText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
  },
  
  filterTextActive: {
    color: colors.white,
  },
  
  listContent: {
    paddingVertical: spacing.sm,
    flexGrow: 1,
  },
  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  
  emptyText: {
    fontSize: typography.fontSize.md,
    color: colors.textDisabled,
    textAlign: 'center',
  },
  
  footerContainer: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  
  clearButton: {
    backgroundColor: colors.danger,
    paddingVertical: spacing.md,
    borderRadius: spacing.sm,
    alignItems: 'center',
  },
  
  clearButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});
