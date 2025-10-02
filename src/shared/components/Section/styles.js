import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 0,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.inter,
    color: colors.primary,
    textAlign: 'center',
  },
});
