import { render } from '@testing-library/react';
import React from 'react';
import { ToggleButton } from './ToggleButton';
import { toggle } from '../../../contexts/DrawerToggle/context';
import { IoMdHome } from 'react-icons/io';

const handleOptions = [
  {
    icon: <IoMdHome />,
    text: 'alguma coisa',
    whereTo: '/',
  },
];

describe('<ToggleButton/>', () => {
  it('should render a button with a svg icon inside with class rotate-180 and transition-all', () => {
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
        <ToggleButton />
      </toggle.Provider>,
    );
    expect(container.firstChild?.firstChild).toHaveClass(
      'rotate-180 transition-all',
    );
  });
  it('should render a button with sgv icon inside', () => {
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
        <ToggleButton />
      </toggle.Provider>,
    );
    expect(container.firstChild?.firstChild).not.toHaveClass('rotate-180');
    expect(container.firstChild?.firstChild).toHaveClass('transition-all');
  });
  it('should match a snapshot', () => {
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
        <ToggleButton />
      </toggle.Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
