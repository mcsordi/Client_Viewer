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
import { ListPeopleTable } from '../ListPeopleTable/ListPeopleTable';

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
      <ListPeopleTable data={people} isLoading={isLoading} error={error} />
    </div>
  );
};
