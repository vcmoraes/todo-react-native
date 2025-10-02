import React from 'react';
import { View } from 'react-native';
import { useNavigation, TABS } from './index';
import { TaskListScreen } from '../features/tasks';
import OtherFeatureScreen from '../features/otherfeature/screen/OtherFeatureScreen';
import { styles } from '../styles/App.styles';

const AppContent = () => {
  const { activeTab } = useNavigation();

  const renderContent = () => {
    if (activeTab === TABS.TASKS) {
      return <TaskListScreen />;
    }
    return <OtherFeatureScreen activeTab={activeTab} />;
  };

  return (
    <View style={styles.mainContent}>
      {renderContent()}
    </View>
  );
};

export default AppContent;
