import React, { useContext, useMemo } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { Enviroment } from '../../../environment/index';
import { useSearchParams } from 'react-router-dom';

export const MenuInput: React.FC<{ visible?: boolean }> = ({
  visible = false,
}) => {
  const { light } = useContext(themeContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  {
    return (
      visible && (
        <input
          placeholder={Enviroment.INPUT_DE_BUSCA}
          type="search"
          value={search}
          className={`${
            light
              ? `bg-slate-200 placeholder:text-gray-500 border-gray-500 focus:bg-slate-300 transition-all
               focus:placeholder:text-gray-700`
              : `bg-zinc-800 text-white placeholder:text-white placeholder:opacity-70`
          }
             outline-none text-lg border rounded-md p-2 font-medium sm:w-96`}
          onChange={(e) =>
            setSearchParams({ busca: e.target.value }, { replace: true })
          }
        />
      )
    );
  }
};
