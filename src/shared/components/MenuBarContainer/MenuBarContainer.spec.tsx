import { render, screen } from '@testing-library/react';
import { MenuBarContainer } from './MenuBarContainer';
import React from 'react';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';

describe('<MenuBarContainer/>', () => {
  it('should render a MenuBarComponent without children', () => {
    const { container } = render(<MenuBarContainer />);
    expect(container.children).toHaveLength(1);
    expect(container).toBeInTheDocument();
  });
  it('should render a MenuBarComponent with children', () => {
    render(<MenuBarContainer visible bVisible text="novo" />);
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode?.firstChild).toBeInTheDocument();
  });
  it('should render a MenuBarComponent with white background', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MenuBarContainer visible bVisible text="novo" />
      </themeContext.Provider>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton.parentNode).toHaveClass('bg-white');
  });
  it('should render a MenuBarComponent with dark background', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MenuBarContainer visible bVisible text="novo" />
      </themeContext.Provider>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton.parentNode).toHaveClass('bg-zinc-700');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MenuBarContainer visible bVisible text="novo" />
      </themeContext.Provider>,
    );
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode).toMatchSnapshot();
  });
});
