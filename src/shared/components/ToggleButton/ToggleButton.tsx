import React, { useContext } from 'react';
import { toggle } from '../../../contexts/DrawerToggle/context.ts';
import { RiMenuFold4Fill } from 'react-icons/ri';

type TToggleButton = {
  visible?: boolean;
};
export const ToggleButton: React.FC<TToggleButton> = ({ visible }) => {
  const { show, toggleState } = useContext(toggle);
  return (
    <button
      className="absolute top-0 cursor-pointer rounded-md h-10 px-2 font-medium text-3xl
       bg-zinc-50 border border-zinc-400 flex sm:hidden items-center"
      onClick={() => toggleState()}
    >
      {show || visible ? (
        <RiMenuFold4Fill className="rotate-180 transition-all" />
      ) : (
        <RiMenuFold4Fill className="transition-all" />
      )}
    </button>
  );
};
