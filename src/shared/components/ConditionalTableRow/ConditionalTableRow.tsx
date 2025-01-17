import React, { useContext } from 'react';
import { Children } from '../../types/Children';
import { themeContext } from '../../../contexts/ThemeContext/context';

export const ConditionalTableRow: React.FC<Children> = ({ children }) => {
  const { light } = useContext(themeContext);
  return (
    <tr
      className={`${!light && `border-zinc-800`} absolute border border-t-0 border-l-0 border-r-0 last:border-b-0 mr-0 sm:mr-6`}
    >
      <td
        className={`${light ? `bg-white` : `bg-neutral-700`} p-3 relative  w-screen h-12 rounded-md`}
      >
        {children}
      </td>
    </tr>
  );
};
