import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';

export const MenuButton: React.FC<{ text?: string; visible?: boolean }> = ({
  text,
  visible,
}) => {
  {
    return (
      visible && (
        <button
          className="font-roboto text-lg flex items-center gap-2 border
           bg-slate-500 text-white px-3.5 rounded-md font-bold hover:bg-amber-400 transition-all uppercase"
        >
          <span className="hidden sm:flex md:hidden lg:flex">{text}</span>
          <BiPlusMedical />
        </button>
      )
    );
  }
};
