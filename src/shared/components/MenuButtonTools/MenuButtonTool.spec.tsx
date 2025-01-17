import { render, screen } from '@testing-library/react';
import { MenuButtonTool } from './MenuButtonTool';
import { PiPlusBold } from 'react-icons/pi';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { focusTool } from '../../../contexts/FocusTool/context';

describe('<MenuButtonTools/>', () => {
  it('should render a MenuButtonTool component', () => {
    render(<MenuButtonTool text="star" icon={<PiPlusBold />} />);
    const buttonText = screen.getByText('star');
    expect(buttonText.parentElement).toBeInTheDocument();
  });
  it('should render a MenuButtonTool component in the white theme', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MenuButtonTool text="star" icon={<PiPlusBold />} />
      </themeContext.Provider>,
    );
    const buttonText = screen.getByText('star');
    expect(buttonText.parentElement).toHaveClass(`bg-slate-200 text-black`);
  });
  it('should render a MenuButtonTool component on the dark theme', () => {
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MenuButtonTool text="star" icon={<PiPlusBold />} />
      </themeContext.Provider>,
    );
    const buttonText = screen.getByText('star');
    expect(buttonText.parentElement).toHaveClass(`bg-zinc-800 text-white`);
  });
  it('should render a MenuButtonTool with bg-amber-400', () => {
    const setFocus = () => {};
    render(
      <focusTool.Provider value={{ focus: false, setFocus }}>
        <MenuButtonTool text="star" icon={<PiPlusBold />} />
      </focusTool.Provider>,
    );
    const buttonText = screen.getByText('star');
    expect(buttonText.parentElement).toHaveClass(
      `first:bg-amber-400 first:text-white`,
    );
  });
  it('should match a snapshot', () => {
    const setFocus = () => {};
    render(
      <focusTool.Provider value={{ focus: false, setFocus }}>
        <MenuButtonTool text="star" icon={<PiPlusBold />} />
      </focusTool.Provider>,
    );
    const buttonText = screen.getByText('star');
    expect(buttonText.parentElement).toMatchSnapshot();
  });
});
