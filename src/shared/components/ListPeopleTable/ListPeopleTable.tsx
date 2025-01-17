import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { ConditionalTableRow } from '../ConditionalTableRow/ConditionalTableRow';
import { RiLoaderLine } from 'react-icons/ri';
import { TDataPeopleList } from '../../../services/people/PeopleService';
import { LoadComponent } from '../LoadComponent/LoadComponent';

type TListPeopleTable = {
  data: TDataPeopleList;
  isLoading: boolean;
  error: string;
};

export const ListPeopleTable: React.FC<TListPeopleTable> = ({
  data,
  isLoading,
  error,
}) => {
  const { light } = useContext(themeContext);

  return (
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
          <LoadComponent />
        </ConditionalTableRow>
      ) : (
        <tbody>
          {data?.data?.length == 0 && (
            <ConditionalTableRow>
              Nenhum resultado foi encontrado na listagem
            </ConditionalTableRow>
          )}
          {error ? (
            <ConditionalTableRow>{error}</ConditionalTableRow>
          ) : (
            data?.data.map((person) => (
              <tr
                className={`${!light && `border-zinc-800`} border border-t-0 border-l-0 border-r-0 last:border-b-0`}
                key={person.id}
              >
                <td className="p-3 ">Ações</td>
                <td className="p-3 ">{person.fullName}</td>
                <td className="p-3 ">{person.email}</td>
              </tr>
            ))
          )}
        </tbody>
      )}
    </table>
  );
};
