import React from 'react';
import { Theme } from '../shared/components/Theme/Theme.tsx';

import { BackgroundContainer } from '../shared/components/BackgroundContainer/BackgroundContainer.tsx';
import { Drawer } from '../shared/components/Drawer/Drawer.tsx';
import { ToggleButton } from '../shared/components/ToggleButton/ToggleButton.tsx';

export const InitialPage = () => {
  return (
    <BackgroundContainer>
      <Theme />
      <Drawer />
      <ToggleButton />
    </BackgroundContainer>
  );
};
