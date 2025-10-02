import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    minHeight: 60,
  },
  taskContent: {
    flex: 1,
    marginRight: 12,
  },
  removeButton: {
    alignSelf: 'center',
  },
});
