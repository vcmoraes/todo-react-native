import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'column',
    padding: 16,
    minHeight: 120,
  },
  editContainer: {
    flex: 1,
  },
  taskContent: {
    flex: 1,
    marginRight: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4
  },
});
