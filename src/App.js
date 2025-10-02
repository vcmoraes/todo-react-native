import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TaskList } from './features/tasks';
import { styles } from './styles/App.styles';
import { AppJotaiProvider } from './providers/JotaiProvider';
import './i18n';
import { colors } from './shared/theme';

const BottomNavigation = () => (
  <View style={styles.bottomNavigation}>
    {[1, 2, 3, 4].map((item) => (
      <View key={item} style={[styles.navTab, item === 1 && styles.navTabActive]}>
        <View style={styles.navIcon} />
        <Text style={styles.navLabel}>Item</Text>
      </View>
    ))}
  </View>
);

const AppContent = () => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contentContainer}>
        <TaskList />
      </View>
    </View>
  );
};

const AppLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <AppContent />
      <BottomNavigation />
    </View>
  );
};

export default function App() {
  return (
    <AppJotaiProvider>
      <AppLayout />
    </AppJotaiProvider>
  );
}
