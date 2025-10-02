import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  header: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  headerTitle: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray700,
    marginBottom: spacing.xs,
  },
  
  headerSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
});
