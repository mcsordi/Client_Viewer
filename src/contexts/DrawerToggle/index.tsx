import React, { useCallback, useState } from 'react';
import { toggle } from './context';
import { Children } from '../../shared/types/Children';
import { TNavDrawer } from '../../shared/types/NavDrawer';
export const DrawerToggle: React.FC<Children> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const [drawerOptions, setDrawerOptions] = useState<TNavDrawer[]>([]);
  const toggleState = useCallback(() => {
    return setShow((old: boolean) => !old);
  }, []);
  const handleDrawerOptions = useCallback((navDrawer: TNavDrawer[]) => {
    return setDrawerOptions(navDrawer);
  }, []);
  return (
    <toggle.Provider
      value={{ show, toggleState, drawerOptions, handleDrawerOptions }}
    >
      {children}
    </toggle.Provider>
  );
};
