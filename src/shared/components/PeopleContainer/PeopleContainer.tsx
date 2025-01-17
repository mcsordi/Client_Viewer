import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PeopleService,
  TDataPeopleList,
} from '../../../services/people/PeopleService';
import { useDebounce } from '../../../hooks/useDebounce/useDebounce';
import { ListPeopleTable } from '../ListPeopleTable/ListPeopleTable';
import { FaArrowCircleRight } from 'react-icons/fa';

export const PeopleContainer: React.FC = () => {
  const params = useLocation().search;
  const formatedInputText = params.split('=')[1]?.replaceAll('+', ' ');
  const { debounce } = useDebounce(500);
  const [people, setPeople] = useState<TDataPeopleList>();
  const [count, setCount] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PeopleService.getAll(page, formatedInputText).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          return setError(result.message);
        }
        setPeople(result);
        setCount(result.totalCount);
      });
    });
  }, [formatedInputText, page]);

  return (
    <div>
      <ListPeopleTable data={people} isLoading={isLoading} error={error} />
      <div className="flex justify-center gap-5 p-2 text-2xl">
        {/* <FaArrowCircleRight
          className="rotate-180"
          onClick={() => setPage((prev) => (prev == 1 ? (prev = 1) : prev - 1))}
        /> */}

        {/* <FaArrowCircleRight
          className="animate-ping   bg-sky-400 opacity-75"
          onClick={() => setPage((prev) => prev + 1)}
        /> */}
      </div>
    </div>
  );
};
