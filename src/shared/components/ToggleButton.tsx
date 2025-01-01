import React, { useContext } from 'react';
import { toggle } from '../../contexts/DrawerToggle/context.ts';

type TToggleButton = {
  visible?: boolean;
};
export const ToggleButton: React.FC<TToggleButton> = ({ visible }) => {
  const { show, toggleState } = useContext(toggle);
  return (
    <button
      className="absolute bottom-0 cursor-pointer rounded-md h-10 px-6 font-medium text-lg
       bg-zinc-50 border border-zinc-400 flex md:hidden items-center"
      onClick={() => toggleState()}
    >
      {show || visible ? `Esconder` : `Mostrar`}
    </button>
  );
};
