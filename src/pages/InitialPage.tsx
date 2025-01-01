import React from 'react';
import { Theme } from '../shared/components/Theme.tsx';

import { BackgroundContainer } from '../shared/components/BackgroundContainer.tsx';

export const InitialPage = () => {
  return (
    <BackgroundContainer>
      <Theme />
    </BackgroundContainer>
  );
};
