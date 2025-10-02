import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_TAB } from './constants';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const handleTabPress = useCallback((tabIndex) => {
    setActiveTab(tabIndex);
  }, []);

  const value = useMemo(() => ({
    activeTab,
    handleTabPress,
  }), [activeTab, handleTabPress]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
