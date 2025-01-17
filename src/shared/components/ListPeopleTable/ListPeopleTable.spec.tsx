import { render, screen } from '@testing-library/react';
import { ListPeopleTable } from './ListPeopleTable';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { toHaveClass } from '@testing-library/jest-dom/matchers';

const people = {
  data: [
    {
      fullName: 'Tiago Lancelotti',
      email: 'tiago@gmail.com',
      id: 1,
      cityId: 1,
    },
  ],
};

describe('<ListPeopleTable/>', () => {
  it('should render a table component with data and darkMode', () => {
    const { container } = render(
      <ListPeopleTable data={people} isLoading={false} error={undefined} />,
    );
    expect(container.firstChild).toHaveClass('bg-zinc-700 text-white');
    expect(container.firstChild.lastChild.hasChildNodes()).toBe(true);
    const personName = screen.getByText('Tiago Lancelotti');
    expect(personName).toBeInTheDocument();
  });
  it('should render a table component with data and light mode', () => {
    const changeTheme = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <ListPeopleTable data={people} isLoading={false} error={undefined} />
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild.lastChild.hasChildNodes()).toBe(true);
  });
  it('should render a table component with no data', () => {
    render(
      <ListPeopleTable
        data={{ data: [] }}
        isLoading={false}
        error={undefined}
      />,
    );
    const noDataText = screen.getByText(
      'Nenhum resultado foi encontrado na listagem',
    );
    expect(noDataText).toBeInTheDocument();
  });
  it('should render a table component in loading', () => {
    const { container } = render(
      <ListPeopleTable data={people} isLoading={true} error={undefined} />,
    );
    expect(container.firstChild.lastChild.firstChild.firstChild).toHaveClass(
      'animate-spin text-2xl',
    );
  });
  it('should render a table component in error', () => {
    render(
      <ListPeopleTable data={people} isLoading={false} error={'hello there'} />,
    );
    const errorText = screen.getByText('hello there');
    expect(errorText).toBeInTheDocument();
  });
  it('should match a snapshot', () => {
    const { container } = render(
      <ListPeopleTable data={people} isLoading={false} error={''} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
