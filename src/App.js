import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from './styles/App.styles';
import { AppJotaiProvider } from './providers/JotaiProvider';
import { NavigationProvider, AppContent, BottomNavigation } from './navigation';
import './i18n';
import { colors } from './shared/theme';

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
      <NavigationProvider>
        <AppLayout />
      </NavigationProvider>
    </AppJotaiProvider>
  );
}
