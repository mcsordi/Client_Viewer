import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

export const Theme: React.FC = () => {
  const { light, changeTheme } = useContext(themeContext);

  return (
    <button
      className={` ${light && `bg-slate-700`} flex justify-center gap-5
        rounded-md w-full border py-3.5 bg-white absolute bottom-0`}
      onClick={() => changeTheme()}
    >
      {light ? (
        <MdLightMode className="text-yellow-500 text-3xl" />
      ) : (
        <MdDarkMode className="text-3xl text-gray-700" />
      )}
      <p className="text-lg font-medium">Alterar Tema</p>
    </button>
  );
};
