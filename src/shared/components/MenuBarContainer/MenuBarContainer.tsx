import React from 'react';
import { MenuInput } from '../MenuInput/MenuInput.tsx';
import { MenuButton } from '../MenuButton/MenuButton.tsx';
import { TMenuButton } from '../../types/MenuButton.ts';

export const MenuBarContainer: React.FC<TMenuButton> = ({
  visible,
  text,
  bVisible,
}) => {
  return (
    <div className="w-full p-3.5 shadow-md min-h-16 bg-white rounded-md flex justify-between">
      {<MenuInput visible={visible} />}
      {<MenuButton visible={bVisible} text={text} />}
    </div>
  );
};
