import React, { useState } from 'react';
import { Children } from '../../shared/types/Children';
import { focusTool } from './context';

export const FocusTool: React.FC<Children> = ({ children }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <focusTool.Provider value={{ focus, setFocus }}>
      {children}
    </focusTool.Provider>
  );
};
