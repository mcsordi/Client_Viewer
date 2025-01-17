import { render, screen } from '@testing-library/react';
import { MenuInput } from './MenuInput';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { MemoryRouter } from 'react-router-dom';
import { Enviroment } from '../../../environment';

describe('<MenuInput/>', () => {
  it('should render a MenuInput component', () => {
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <MenuInput visible />
      </MemoryRouter>,
    );
    const inputPlaceholder = screen.getByPlaceholderText(
      Enviroment.INPUT_DE_BUSCA,
    );
    expect(inputPlaceholder).toBeInTheDocument();
  });
  it('should render a MenuInput component without children', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <MenuInput />
      </MemoryRouter>,
    );
    expect(container.children).toHaveLength(0);
  });
  it('should render a MenuInput component in the dark theme', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: false, changeTheme }}>
          <MenuInput visible />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const placeholder = screen.getByPlaceholderText(Enviroment.INPUT_DE_BUSCA);
    expect(placeholder).toHaveClass('bg-zinc-800 placeholder:text-white');
  });
  it('should render a MenuInput component in the white theme', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: true, changeTheme }}>
          <MenuInput visible />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const placeholder = screen.getByPlaceholderText(Enviroment.INPUT_DE_BUSCA);
    expect(placeholder).toHaveClass('bg-slate-200 placeholder:text-gray-500');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: true, changeTheme }}>
          <MenuInput visible />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const placeholder = screen.getByPlaceholderText(Enviroment.INPUT_DE_BUSCA);
    expect(placeholder).toMatchSnapshot();
  });
});
