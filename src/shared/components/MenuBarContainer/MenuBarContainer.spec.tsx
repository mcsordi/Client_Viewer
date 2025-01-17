import { render, screen } from '@testing-library/react';
import { MenuBarContainer } from './MenuBarContainer';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { MemoryRouter } from 'react-router-dom';

describe('<MenuBarContainer/>', () => {
  it('should render a MenuBarComponent without children', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <MenuBarContainer />
      </MemoryRouter>,
    );
    expect(container.children).toHaveLength(1);
  });
  it('should render a MenuBarComponent with children', () => {
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <MenuBarContainer visible text="novo" />
      </MemoryRouter>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode?.firstChild).toBeInTheDocument();
  });
  it('should render a MenuBarComponent with white background', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: true, changeTheme }}>
          <MenuBarContainer visible text="novo" />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton.parentNode?.parentElement).toHaveClass('bg-white');
  });
  it('should render a MenuBarComponent with dark background', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: false, changeTheme }}>
          <MenuBarContainer visible text="novo" />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton.parentElement?.parentElement).toHaveClass('bg-zinc-700');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    render(
      <MemoryRouter initialEntries={['/pessoas?busca=cavalo']}>
        <themeContext.Provider value={{ light: false, changeTheme }}>
          <MenuBarContainer visible text="novo" />
        </themeContext.Provider>
      </MemoryRouter>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode).toMatchSnapshot();
  });
});
