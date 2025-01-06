import React from 'react';
import { BackgroundContainer } from '../../shared/components/BackgroundContainer/BackgroundContainer.tsx';
import { Drawer } from '../../shared/components/Drawer/Drawer.tsx';
import { Theme } from '../../shared/components/Theme/Theme.tsx';
import { ToggleButton } from '../../shared/components/ToggleButton/ToggleButton.tsx';

type TOptionsPage = {
  children: React.ReactNode;
  title: string;
  menu?: React.ReactNode;
};

export const MainPage: React.FC<TOptionsPage> = ({ children, menu, title }) => {
  return (
    <BackgroundContainer>
      <Drawer />
      <div className="w-full px-6">
        <div className="flex items-center justify-between w-full py-6 sm:py-8 md:py-10">
          <div className="flex gap-3">
            <ToggleButton />
            <h1 className="text-2xl font-roboto sm:text-3xl md:text-4xl">
              {title}
            </h1>
          </div>
          <Theme />
        </div>
        {menu && <div className="flex min-w-full">{menu}</div>}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </BackgroundContainer>
  );
};
