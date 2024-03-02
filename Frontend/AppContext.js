

import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  
  // Provide the context value to the children components
  return (
    <AppContext.Provider >
      {children}
    </AppContext.Provider>
  );
};
