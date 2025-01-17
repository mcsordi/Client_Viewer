import React, { useContext } from 'react';
import { toggle } from '../../../contexts/DrawerToggle/context';
import { RiMenuFold4Fill } from 'react-icons/ri';

export const ToggleButton: React.FC = () => {
  const { show, toggleState } = useContext(toggle);
  return (
    <button
      className="relative top-0 cursor-pointer rounded-md h-10 px-2 font-medium text-3xl
       bg-zinc-50 flex md:hidden items-center"
      onClick={() => toggleState()}
    >
      {show ? (
        <RiMenuFold4Fill className="rotate-180 transition-all duration-500" />
      ) : (
        <RiMenuFold4Fill className="transition-all duration-500" />
      )}
    </button>
  );
};
