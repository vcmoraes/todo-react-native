import { StyleSheet } from 'react-native';
import { colors, typography } from '../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 0,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 190,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 86,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  navTab: {
    flex: 1,
    height: 86,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
  },
  navTabActive: {
    borderTopWidth: 3,
    borderTopColor: colors.neutral300,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.inter,
    color: colors.neutral500,
    textAlign: 'center',
  },
});
