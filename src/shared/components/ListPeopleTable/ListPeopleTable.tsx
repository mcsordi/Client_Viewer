import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { ConditionalTableRow } from '../ConditionalTableRow/ConditionalTableRow';
import { RiLoaderLine } from 'react-icons/ri';

export const ListPeopleTable: React.FC<{
  people: any;
  isLoading: boolean;
  error: string;
}> = ({ people, isLoading, error }) => {
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
  );
};
