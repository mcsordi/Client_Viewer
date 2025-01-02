import React from 'react';
import { BackgroundContainer } from '../../shared/components/BackgroundContainer/BackgroundContainer.tsx';
import { Drawer } from '../../shared/components/Drawer/Drawer.tsx';
import { Theme } from '../../shared/components/Theme/Theme.tsx';
import { ToggleButton } from '../../shared/components/ToggleButton/ToggleButton.tsx';
import { Children } from '../../shared/types/Children';

export const MainPage: React.FC<Children> = ({ children }) => {
  return (
    <BackgroundContainer>
      <Theme />
      <Drawer />
      <ToggleButton />
      {children}
    </BackgroundContainer>
  );
};
