import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PeopleService,
  TDataPeopleList,
} from '../../../services/people/PeopleService';
import { useDebounce } from '../../../hooks/useDebounce/useDebounce';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { RiLoaderLine } from 'react-icons/ri';
import { ConditionalTableRow } from '../ConditionalTableRow/ConditionalTableRow';

export const PeopleContainer: React.FC = () => {
  const params = useLocation().search;
  const formatedInputText = params.split('=')[1]?.replaceAll('+', ' ');
  const { debounce } = useDebounce(500);
  const [people, setPeople] = useState<TDataPeopleList>();
  const [count, setCount] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const { light } = useContext(themeContext);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PeopleService.getAll(1, formatedInputText).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          return setError(result.message);
        }
        setPeople(result);
        setCount(result.totalCount);
      });
    });
  }, [formatedInputText]);

  return (
    <div>
      <table
        className={`${light ? `bg-white` : `bg-zinc-700 text-white`} w-full mt-5 rounded-lg`}
      >
        <thead>
          <tr
            className={`${!light && `border-zinc-800`} border border-t-0 border-l-0 border-r-0`}
          >
            <th className="p-3  text-start">Ações</th>
            <th className="p-3  text-start">Nome</th>
            <th className="p-3  text-start">Email</th>
          </tr>
        </thead>
        {isLoading ? (
          <ConditionalTableRow>
            <RiLoaderLine className="animate-spin text-2xl" />
          </ConditionalTableRow>
        ) : (
          <tbody>
            {error && <ConditionalTableRow>{error}</ConditionalTableRow>}

            {people?.data?.length == 0 && (
              <ConditionalTableRow>
                Nenhum resultado foi encontrado na listagem
              </ConditionalTableRow>
            )}
            {people?.data.map((people) => (
              <tr
                className={`${!light && `border-zinc-800`} border border-t-0 border-l-0 border-r-0 last:border-b-0`}
                key={people.id}
              >
                <td className="p-3 ">Ações</td>
                <td className="p-3 ">{people.fullName}</td>
                <td className="p-3 ">{people.email}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};
