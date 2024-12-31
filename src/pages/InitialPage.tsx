import React from 'react';
import { ChangeTheme } from '../shared/components/ChangeTheme.tsx';

import { BackgroundContainer } from '../shared/components/BackgroundContainer.tsx';

export const InitialPage = () => {
  return (
    <BackgroundContainer>
      <ChangeTheme />
    </BackgroundContainer>
  );
};
