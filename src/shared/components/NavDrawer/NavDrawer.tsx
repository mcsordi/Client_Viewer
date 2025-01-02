import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { Link } from 'react-router-dom';

type TNavDrawer = {
  icon: React.ReactNode;
  text: string;
  theme?: boolean;
  whereTo: string;
};

export const NavDrawer: React.FC<TNavDrawer> = ({
  icon,
  text,
  theme,
  whereTo,
}) => {
  const { light } = useContext(themeContext);
  return (
    <Link to={whereTo}>
      <div
        className={`${light || theme ? `text-black` : `text-gray-200`}
         cursor-pointer flex w-full justify-between items-center px-11 p-3.5 border-b-2 hover:bg-neutral-200 hover:text-black`}
      >
        {icon} <p className="min-w-24 font-medium">{text}</p>
      </div>
    </Link>
  );
};
