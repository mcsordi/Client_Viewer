import React, { useContext } from 'react';
import { themeContext } from '../../contexts/ThemeContext/context.ts';

type IchildrenTheme = {
  children: React.ReactNode;
  theme?: boolean;
};

export const BackgroundContainer: React.FC<IchildrenTheme> = ({
  children,
  theme,
}) => {
  const { light } = useContext(themeContext);
  return (
    <section
      className={`w-full min-h-screen ${light || theme ? `bg-slate-200` : 'bg-zinc-900'}`}
    >
      {children}
    </section>
  );
};
