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
  },
  navTabActive: {
    borderTopWidth: 3,
    borderTopColor: '#BDC5D0',
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
    color: '#7C8898',
    textAlign: 'center',
    lineHeight: 14.4,
  },
});
