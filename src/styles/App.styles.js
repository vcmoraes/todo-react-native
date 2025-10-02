import { StyleSheet } from 'react-native';
import { colors, typography } from '../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 86,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 86,
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: '100%',
  },
  navTab: {
    flex: 1,
    height: 86,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTabActive: {
    borderTopWidth: 3,
    borderTopColor: colors.primary,
  },
  navTabContent: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: typography.fontFamily.inter,
    color: colors.neutral500,
    textAlign: 'center',
    lineHeight: 14.4,
  },
});
