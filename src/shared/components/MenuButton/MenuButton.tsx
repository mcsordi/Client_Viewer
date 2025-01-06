import React from 'react';
import { TMenuButton } from '../../types/MenuButton';
import { BiPlusMedical } from 'react-icons/bi';

export const MenuButton: React.FC<TMenuButton> = ({
  visible = false,
  text,
}) => {
  {
    return (
      visible && (
        <button
          className="font-roboto text-lg flex items-center gap-2 border
           bg-slate-500 text-white px-3.5 rounded-md font-bold hover:bg-amber-400 transition-all uppercase"
        >
          {text}
          <BiPlusMedical />
        </button>
      )
    );
  }
};
