import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { TaskListScreen } from './features/tasks';
import OtherFeatureScreen from './features/otherfeature/screen/OtherFeatureScreen';
import { styles } from './styles/App.styles';
import { AppJotaiProvider } from './providers/JotaiProvider';
import PlusIcon from './shared/components/PlusIcon';
import './i18n';
import { colors } from './shared/theme';

const BottomNavigation = ({ activeTab, onTabPress }) => (
  <View style={styles.bottomNavigation}>
    {[1, 2, 3, 4].map((item) => (
      <TouchableOpacity 
        key={item} 
        style={[styles.navTab, item === activeTab && styles.navTabActive]}
        onPress={() => onTabPress(item)}
      >
        <View style={styles.navTabContent}>
          <PlusIcon size={24} />
          <Text style={styles.navLabel}>Item</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

BottomNavigation.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabPress: PropTypes.func.isRequired,
};

const AppContent = ({ activeTab }) => {
  const renderContent = () => {
    if (activeTab === 1) {
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

AppContent.propTypes = {
  activeTab: PropTypes.number.isRequired,
};

const AppLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <AppContent activeTab={activeTab} />
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
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
