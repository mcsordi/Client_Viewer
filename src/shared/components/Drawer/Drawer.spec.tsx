import { render } from '@testing-library/react';
import { Drawer } from './Drawer.tsx';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { toggle } from '../../../contexts/DrawerToggle/context.ts';

describe('<Drawer/>', () => {
  const changeTheme = () => {};
  it('should render Drawer component in the dark mode', () => {
    const { container } = render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-zinc-700');
  });
  it('should render Drawer component in the light mode', () => {
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-white');
  });

  it('should render drawer with a flex display', () => {
    const toggleState = () => {};
    const { container } = render(
      <toggle.Provider value={{ show: true, toggleState }}>
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </toggle.Provider>,
    );
    expect(container.firstChild).toHaveClass('flex');
  });
  it('should render drawer with a hidden display', () => {
    const toggleState = () => {};
    const { container } = render(
      <toggle.Provider value={{ show: false, toggleState }}>
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </toggle.Provider>,
    );
    expect(container.firstChild).toHaveClass('hidden');
  });
  it('should match a snapshot', () => {
    const toggleState = () => {};
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <toggle.Provider value={{ show: false, toggleState }}>
          <MemoryRouter>
            <Drawer />
          </MemoryRouter>
        </toggle.Provider>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
