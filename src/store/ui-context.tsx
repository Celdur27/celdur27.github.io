import React, { useState } from 'react';
import { createContext } from 'react';

type UIContextType = {
  isLightTheme: boolean;
  toggleTheme: () => void;
};

export const UIContext = createContext<UIContextType>({
  isLightTheme: true,
  toggleTheme: () => {},
});

type UIContextProviderProps = {
  children: React.ReactNode;
};

const UIContextProvider = ({
  children,
}: UIContextProviderProps): React.ReactElement => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const toggleThemeHandler = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const uiContextValue: UIContextType = {
    isLightTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <UIContext.Provider value={uiContextValue}>{children}</UIContext.Provider>
  );
};

export default UIContextProvider;
