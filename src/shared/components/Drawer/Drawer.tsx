import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { ImgContainer } from '../ImgContainer/ImgContainer';
import { NavDrawer } from '../NavDrawer/NavDrawer';
import { toggle } from '../../../contexts/DrawerToggle/context';
import { Theme } from '../Theme/Theme';

export const Drawer: React.FC = () => {
  const { light } = useContext(themeContext);
  const { show, drawerOptions } = useContext(toggle);

  return (
    <div
      className={`${show ? `flex absolute z-10` : 'hidden'} md:flex md:relative flex-col ${light ? `bg-white` : `bg-zinc-700`}
        w-56 min-h-screen`}
    >
      <ImgContainer path="./1678304807285.jpeg" />

      {drawerOptions.map((el) => {
        return (
          <NavDrawer
            key={el.whereTo}
            whereTo={el.whereTo}
            text={el.text}
            icon={el.icon}
          />
        );
      })}

      <Theme />
    </div>
  );
};
