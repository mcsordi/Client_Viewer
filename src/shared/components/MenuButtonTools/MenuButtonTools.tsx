import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { focusTool } from '../../../contexts/FocusTool/context.ts';

type TButtonTolls = {
  text?: string;
  icon?: React.ReactNode;
};
export const MenuButtonTools: React.FC<TButtonTolls> = ({ text, icon }) => {
  const { light } = useContext(themeContext);
  const { focus, setFocus } = useContext(focusTool);

  return (
    <button
      className={`${light ? `bg-slate-200 text-black` : `bg-zinc-800 text-white`}
    flex items-center px-3 py-2 gap-2 uppercase rounded-md font-roboto
    ${!focus && `first:bg-amber-400 first:text-white`} font-medium hover:border
     hover:border-amber-400 focus:bg-amber-400 focus:text-white
    hover:text-amber-400 hover:stroke- border transition-all`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {icon}
      {text}
    </button>
  );
};
