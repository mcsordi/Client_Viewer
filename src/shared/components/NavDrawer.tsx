import React, { useContext } from 'react';
import { themeContext } from '../../contexts/ThemeContext/context.ts';

type TNavDrawer = {
  icon: React.ReactNode;
  text: string;
  theme?: boolean;
};

export const NavDrawer: React.FC<TNavDrawer> = ({ icon, text, theme }) => {
  const { light } = useContext(themeContext);
  return (
    <div
      className={`${light || theme ? `text-black` : `text-gray-200`}
         cursor-pointer flex w-full justify-between items-center px-11 p-3.5 border-b-2`}
    >
      {icon} <p className="min-w-24 font-medium">{text}</p>
    </div>
  );
};
