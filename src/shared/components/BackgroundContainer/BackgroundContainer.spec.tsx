import { render, screen } from '@testing-library/react';
import { BackgroundContainer } from './BackgroundContainer';
import React from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';

describe('<BackgroundContainer/>', () => {
  const changeTheme = () => {};
  it('should render the background in the dark mode', () => {
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <BackgroundContainer>
          <p>hola</p>
        </BackgroundContainer>
      </themeContext.Provider>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toHaveClass('bg-zinc-900');
  });
  it('should render the background in the light mode', () => {
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <BackgroundContainer>
          <p>hola</p>
        </BackgroundContainer>
      </themeContext.Provider>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toHaveClass('bg-slate-200');
  });
  it('should match a snapshot', () => {
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <BackgroundContainer>
          <p>hola</p>
        </BackgroundContainer>
      </themeContext.Provider>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toMatchSnapshot();
  });
});
