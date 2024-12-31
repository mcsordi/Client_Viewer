import React, { useCallback, useState } from 'react';
import { themeContext } from './context.ts';
import { Children } from '../../shared/types/Children.ts';

export const ThemeContext: React.FC<Children> = ({ children }) => {
  const [light, setLight] = useState<boolean>(true);
  const changeTheme = useCallback(() => {
    setLight((old) => !old);
  }, []);
  return (
    <themeContext.Provider value={{ light, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};
