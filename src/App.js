import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { TaskList, AddTask } from './features/tasks';
import { styles } from './styles/App.styles';
import { AppJotaiProvider } from './providers/JotaiProvider';
import './i18n';
import { useI18n } from './shared/hooks/useI18n';

const AppContent = () => {
  const { translate } = useI18n();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{translate('app.title')}</Text>
        <Text style={styles.headerSubtitle}>{translate('app.subtitle')}</Text>
      </View>
      
      <TaskList />
      <AddTask />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AppJotaiProvider>
      <AppContent />
    </AppJotaiProvider>
  );
}

