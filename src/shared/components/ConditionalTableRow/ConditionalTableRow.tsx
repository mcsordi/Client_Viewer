import React, { useContext } from 'react';
import { Children } from '../../types/Children';
import { themeContext } from '../../../contexts/ThemeContext/context';

export const ConditionalTableRow: React.FC<Children> = ({ children }) => {
  const { light } = useContext(themeContext);
  return (
    <tr
      className={`${!light && `border-zinc-800`} border border-t-0 border-l-0 border-r-0 last:border-b-0`}
    >
      <td className="p-3 ">{children}</td>
    </tr>
  );
};
