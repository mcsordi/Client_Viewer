import { render, screen } from '@testing-library/react';
import { ConditionalTableRow } from './ConditionalTableRow';
import { themeContext } from '../../../contexts/ThemeContext/context';

describe('<ConditionalTableRow/>', () => {
  it('should render a component', () => {
    render(<ConditionalTableRow>chicken</ConditionalTableRow>);
    const textTd = screen.getByText('chicken');
    expect(textTd.parentElement).toBeInTheDocument();
  });
  it('should render a component in the dark mode', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <ConditionalTableRow>chicken</ConditionalTableRow>
      </themeContext.Provider>,
    );
    const textTd = screen.getByText('chicken');
    expect(textTd.parentElement).toHaveClass('border-zinc-800');
    expect(textTd.parentElement.firstChild).toHaveClass('bg-neutral-700');
  });
  it('should render a component in the light mode', () => {
    const changeTheme = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <ConditionalTableRow>chicken</ConditionalTableRow>
      </themeContext.Provider>,
    );
    expect(container.firstChild).not.toHaveClass('border-zinc-800');
    expect(container.firstChild.firstChild).toHaveClass('bg-white');
  });
  it('should match a snapshot', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <ConditionalTableRow>chicken</ConditionalTableRow>
      </themeContext.Provider>,
    );
    const textTd = screen.getByText('chicken');
    expect(textTd.parentElement).toMatchSnapshot();
  });
});
