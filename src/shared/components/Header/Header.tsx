import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';

export const Header: React.FC<{ header: string }> = ({ header }) => {
  const { light } = useContext(themeContext);
  return (
    <h1
      className={`${light ? `text-black` : `text-white`}  text-2xl font-roboto sm:text-3xl md:text-4xl`}
    >
      {header}
    </h1>
  );
};
