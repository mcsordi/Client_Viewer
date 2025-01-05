import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom';

type TNavDrawer = {
  icon: React.ReactNode;
  text: string;
  whereTo: string;
};

export const NavDrawer: React.FC<TNavDrawer> = ({ icon, text, whereTo }) => {
  const { light } = useContext(themeContext);
  const path = useLocation().pathname;
  const match: boolean = path == whereTo;
  return (
    <Link to={whereTo}>
      <div
        className={`${light || match ? `text-black` : `text-gray-200`}
         cursor-pointer flex w-full justify-between items-center px-11 p-3.5 border-b-2
          hover:bg-neutral-200 hover:text-black ${match && `bg-slate-200`}
         `}
      >
        {icon} <p className="min-w-24 font-medium">{text}</p>
      </div>
    </Link>
  );
};
