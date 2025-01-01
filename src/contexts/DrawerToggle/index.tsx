import React, { useCallback, useState } from 'react';
import { toggle } from './context.ts';
import { Children } from '../../shared/types/Children.ts';
export const DrawerToggle: React.FC<Children> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const toggleState = useCallback(() => {
    return setShow((old: boolean) => !old);
  }, []);
  return (
    <toggle.Provider value={{ show, toggleState }}>{children}</toggle.Provider>
  );
};
