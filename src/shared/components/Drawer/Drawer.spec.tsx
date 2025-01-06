import { render } from '@testing-library/react';
import { Drawer } from './Drawer.tsx';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { toggle } from '../../../contexts/DrawerToggle/context.ts';
import { IoMdHome } from 'react-icons/io';

const handleOptions = [
  {
    icon: <IoMdHome className="text-xl" />,
    text: 'Página Inicial',
    whereTo: '/pagina-inicial',
  },
];

describe('<Drawer/>', () => {
  const changeTheme = () => {};
  it('should render Drawer component in the dark mode', () => {
    const toggleState = () => {};
    const drawerOptions = handleOptions;
    const { container } = render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <toggle.Provider
          value={{
            show: false,
            toggleState,
            drawerOptions,
            handleDrawerOptions: () => drawerOptions,
          }}
        >
          <MemoryRouter>
            <Drawer />
          </MemoryRouter>
        </toggle.Provider>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-zinc-700');
  });
  it('should render Drawer component in the light mode', () => {
    const toggleState = () => {};
    const drawerOptions = handleOptions;
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <toggle.Provider
          value={{
            show: true,
            toggleState,
            drawerOptions,
            handleDrawerOptions: () => drawerOptions,
          }}
        >
          <MemoryRouter>
            <Drawer />
          </MemoryRouter>
        </toggle.Provider>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toHaveClass('bg-white');
  });

  it('should render drawer with a flex display', () => {
    const toggleState = () => {};
    const drawerOptions = handleOptions;
    const { container } = render(
      <toggle.Provider
        value={{
          show: true,
          toggleState,
          drawerOptions,
          handleDrawerOptions: () => drawerOptions,
        }}
      >
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </toggle.Provider>,
    );
    expect(container.firstChild).toHaveClass('flex');
  });
  it('should render drawer with a hidden display', () => {
    const toggleState = () => {};
    const drawerOptions = handleOptions;
    const { container } = render(
      <toggle.Provider
        value={{
          show: false,
          toggleState,
          drawerOptions,
          handleDrawerOptions: () => drawerOptions,
        }}
      >
        <MemoryRouter>
          <Drawer />
        </MemoryRouter>
      </toggle.Provider>,
    );
    expect(container.firstChild).toHaveClass('hidden');
  });
  it('should match a snapshot', () => {
    const toggleState = () => {};
    const drawerOptions = handleOptions;
    const { container } = render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <toggle.Provider
          value={{
            show: true,
            toggleState,
            drawerOptions,
            handleDrawerOptions: () => drawerOptions,
          }}
        >
          <MemoryRouter>
            <Drawer />
          </MemoryRouter>
        </toggle.Provider>
      </themeContext.Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
