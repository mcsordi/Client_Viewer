import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { Children } from '../../types/Children.ts';

export const BackgroundContainer: React.FC<Children> = ({ children }) => {
  const { light } = useContext(themeContext);
  return (
    <section
      className={`flex w-full min-h-screen ${light ? `bg-slate-200` : 'bg-zinc-900'}`}
    >
      {children}
    </section>
  );
};
