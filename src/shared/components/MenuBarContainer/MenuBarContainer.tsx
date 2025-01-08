import React, { useContext } from 'react';
import { MenuInput } from '../MenuInput/MenuInput.tsx';
import { MenuButton } from '../MenuButton/MenuButton.tsx';
import { TMenuButton } from '../../types/MenuButton.ts';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';

export const MenuBarContainer: React.FC<TMenuButton> = ({
  visible,
  text,
  bVisible,
}) => {
  const { light } = useContext(themeContext);
  return (
    <div
      className={`${light ? `bg-white` : `bg-zinc-700`} w-full p-3.5 shadow-md min-h-16 rounded-md flex justify-between`}
    >
      {<MenuInput visible={visible} />}
      {<MenuButton visible={bVisible} text={text} />}
    </div>
  );
};
