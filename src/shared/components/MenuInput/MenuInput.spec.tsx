import { render, screen } from '@testing-library/react';
import { MenuInput } from './MenuInput';
import React from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context';

describe('<MenuInput/>', () => {
  it('should render a MenuInput component', () => {
    render(<MenuInput visible />);
    const inputPlaceHolder = screen.getByPlaceholderText('Pesquisar...');
    expect(inputPlaceHolder).toBeInTheDocument();
  });
  it('should render a MenuInput component without text', () => {
    const { container } = render(<MenuInput />);
    expect(container.children).toHaveLength(0);
  });
  it('should render a MenuInput component in the dark theme', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MenuInput visible />
      </themeContext.Provider>,
    );
    const placeholder = screen.getByPlaceholderText('Pesquisar...');
    expect(placeholder).toHaveClass('bg-zinc-800 placeholder:text-white');
  });
  it('should render a MenuInput component in the white theme', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MenuInput visible />
      </themeContext.Provider>,
    );
    const placeholder = screen.getByPlaceholderText('Pesquisar...');
    expect(placeholder).toHaveClass('bg-slate-200 placeholder:text-gray-500');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MenuInput visible />
      </themeContext.Provider>,
    );
    const placeholder = screen.getByPlaceholderText('Pesquisar...');
    expect(placeholder).toMatchSnapshot();
  });
});
