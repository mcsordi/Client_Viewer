import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { TChildrenTheme } from '../../types/ChildrenTheme.ts';

export const BackgroundContainer: React.FC<TChildrenTheme> = ({
  children,
  theme,
}) => {
  const { light } = useContext(themeContext);
  return (
    <section
      className={`flex w-full min-h-screen ${light || theme ? `bg-slate-200` : 'bg-zinc-900'}`}
    >
      {children}
    </section>
  );
};
