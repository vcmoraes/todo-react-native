import React from 'react';
import { Provider as JotaiProvider } from 'jotai';

export const AppJotaiProvider = ({ children }) => {
  return (
    <JotaiProvider>
      {children}
    </JotaiProvider>
  );
};
