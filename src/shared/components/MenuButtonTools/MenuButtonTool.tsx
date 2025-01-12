import React, { useContext, useReducer } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { focusTool } from '../../../contexts/FocusTool/context.ts';
import { reducer } from './useReducer/reducer.ts';
import { values } from './useReducer/state.ts';

type TButtonToll = {
  text?: string;
  icon?: React.ReactNode;
  type?: string;
  loading?: boolean;
};

export const MenuButtonTool: React.FC<TButtonToll> = ({
  text,
  icon,
  type,
  loading,
}) => {
  const { light } = useContext(themeContext);
  const { focus, setFocus } = useContext(focusTool);

  const [state, dispatch]: any = useReducer<any>(reducer, values);

  return (
    <button
      className={`${light && `bg-slate-200 text-black`} ${!light && !loading && `bg-zinc-800 text-white`}
    flex items-center px-3 py-2 gap-2 uppercase rounded-md font-roboto
    ${!focus && !loading && `first:bg-amber-400 first:text-white first:hover:text-white`} font-medium hover:border
    ${!loading && `hover:border-amber-400 focus:bg-amber-400 hover:text-amber-400 focus:text-white`}
    ${loading && `animate-pulse text-opacity-0 text-slate-200 bg-slate-200`}  loading hover:stroke- border transition-all`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={() => dispatch({ type: type })}
    >
      {icon}
      <span className="hidden sm:flex">{text}</span>
    </button>
  );
};
