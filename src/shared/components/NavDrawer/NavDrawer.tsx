import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { Link, useLocation } from 'react-router-dom';
import { TNavDrawer } from '../../types/NavDrawer.ts';
import { toggle } from '../../../contexts/DrawerToggle/context.ts';

export const NavDrawer: React.FC<TNavDrawer> = ({ icon, text, whereTo }) => {
  const { light } = useContext(themeContext);
  const { toggleState } = useContext(toggle);
  const path = useLocation().pathname;
  const match: boolean = path == whereTo;
  return (
    <Link to={whereTo}>
      <div
        className={`${light || match ? `text-black` : `text-gray-200`}
         cursor-pointer flex w-full items-center gap-5 px-11 p-3.5 border-b-2
          hover:bg-neutral-200 hover:text-black ${match && `bg-slate-200`}
         `}
        onClick={() => toggleState()}
      >
        {icon} <p className="min-w-24 font-medium">{text}</p>
      </div>
    </Link>
  );
};
