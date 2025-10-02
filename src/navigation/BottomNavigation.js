import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, TABS, TAB_TRANSLATION_KEYS } from './index';
import { useI18n } from '../shared/hooks/useI18n';
import { styles } from '../styles/App.styles';
import PlusIcon from '../shared/components/PlusIcon';

const BottomNavigation = () => {
  const { activeTab, handleTabPress } = useNavigation();
  const { translate } = useI18n();

  const tabs = Object.values(TABS);

  return (
    <View style={styles.bottomNavigation}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.navTab, tab === activeTab && styles.navTabActive]}
          onPress={() => handleTabPress(tab)}
        >
          <View style={styles.navTabContent}>
            <PlusIcon size={24} />
            <Text style={styles.navLabel}>
              {translate(TAB_TRANSLATION_KEYS[tab])}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavigation;
