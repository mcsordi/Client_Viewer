import React, { useContext } from 'react';
import { themeContext } from '../../contexts/ThemeContext/context.ts';

export const ChangeTheme = () => {
  const { light, changeTheme } = useContext(themeContext);
  return (
    <button
      className="rounded-md absolute right-0 border p-2 bg-white"
      onClick={() => changeTheme()}
    >
      {light ? 'Claro' : 'Escuro'}
    </button>
  );
};
