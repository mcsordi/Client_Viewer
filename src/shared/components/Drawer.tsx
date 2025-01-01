import React, { useContext } from 'react';
import { themeContext } from '../../contexts/ThemeContext/context.ts';
import { ImgContainer } from './ImgContainer.tsx';
import { NavDrawer } from './NavDrawer.tsx';
import { IoMdHome } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

type ITheme = {
  theme?: boolean;
};

export const Drawer: React.FC<ITheme> = ({ theme }) => {
  const { light } = useContext(themeContext);
  return (
    <div
      className={`${light || theme ? `bg-white` : `bg-zinc-700`}   w-56 min-h-screen`}
    >
      <ImgContainer path="./1678304807285.jpeg" />
      <NavDrawer
        text="Página Inicial"
        icon={<IoMdHome className="text-xl" />}
      />
      <NavDrawer text="star page" icon={<FaStar className="text-xl" />} />
    </div>
  );
};
