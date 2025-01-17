import { render, screen } from '@testing-library/react';
import { Theme } from './Theme';
import { themeContext } from '../../../contexts/ThemeContext/context';

describe('<Theme/>', () => {
  it('should render a theme button', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <Theme />
      </themeContext.Provider>,
    );
    const textButton = screen.getByText('Alterar Tema');
    expect(textButton.parentElement).toHaveClass('bg-white absolute bottom-0');
  });
  it('should render a button with slate background', () => {
    const changeTheme = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <Theme />
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-slate-700');
    expect(container.firstChild?.firstChild).toHaveClass('text-yellow-500');
  });
  it('should render a button with white background', () => {
    const changeTheme = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <Theme />
      </themeContext.Provider>,
    );
    expect(container.firstChild).not.toHaveClass('bg-slate-700');
    expect(container.firstChild?.firstChild).toHaveClass('text-gray-700');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <Theme />
      </themeContext.Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
