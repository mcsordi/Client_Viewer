import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import React from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';

describe('<Header/>', () => {
  const changeTheme = () => {};
  it('should render a Header component', () => {
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <Header header="Titulo" />
      </themeContext.Provider>,
    );
    const title = screen.getByRole('heading', { name: 'Titulo' });
    expect(title).toBeInTheDocument();
  });
  it('should render a Header component in the dark theme', () => {
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <Header header="Titulo" />
      </themeContext.Provider>,
    );
    const title = screen.getByRole('heading', { name: 'Titulo' });
    expect(title).toHaveClass('text-white');
  });
  it('should render a Header component in the light theme', () => {
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <Header header="Titulo" />
      </themeContext.Provider>,
    );
    const title = screen.getByRole('heading', { name: 'Titulo' });
    expect(title).toHaveClass('text-black');
    expect(title).not.toHaveClass('text-white');
  });
  it('should match a snapshot', () => {
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <Header header="Titulo" />
      </themeContext.Provider>,
    );
    const title = screen.getByRole('heading', { name: 'Titulo' });
    expect(title).toMatchSnapshot();
  });
});
