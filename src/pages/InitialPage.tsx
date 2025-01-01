import React from 'react';
import { Theme } from '../shared/components/Theme.tsx';

import { BackgroundContainer } from '../shared/components/BackgroundContainer.tsx';
import { Drawer } from '../shared/components/Drawer.tsx';

export const InitialPage = () => {
  return (
    <BackgroundContainer>
      <Theme />
      <Drawer />
    </BackgroundContainer>
  );
};
