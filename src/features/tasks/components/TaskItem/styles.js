import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    minHeight: 90,
  },
  editContainer: {
    flex: 1,
  },
  taskContent: {
    flex: 1,
    marginRight: 8,
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4,
    marginLeft: 8,
  },
});
