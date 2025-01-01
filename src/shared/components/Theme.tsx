import React, { useContext } from 'react';
import { themeContext } from '../../contexts/ThemeContext/context.ts';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

type ITheme = {
  theme?: boolean;
};

export const Theme: React.FC<ITheme> = ({ theme }) => {
  const { light, changeTheme } = useContext(themeContext);

  return (
    <button
      className={` ${light || (theme && `bg-slate-700`)} rounded-md absolute right-0 border p-2 bg-white`}
      onClick={() => changeTheme()}
    >
      {light || theme ? (
        <MdLightMode className="text-yellow-500 text-2xl" />
      ) : (
        <MdDarkMode className="text-2xl text-gray-700" />
      )}
    </button>
  );
};
