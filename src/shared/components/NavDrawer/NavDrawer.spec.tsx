import { render, screen } from '@testing-library/react';
import { FaStar } from 'react-icons/fa';
import React from 'react';
import { NavDrawer } from './NavDrawer.tsx';
import { MemoryRouter } from 'react-router-dom';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';

describe('<NavDrawer/>', () => {
  it('should render a component with an icon and text', () => {
    const drawerOptions = [
      { whereTo: '/', icon: <FaStar className="text-xl" />, text: 'Star page' },
    ];
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MemoryRouter>
          {drawerOptions.map((el) => (
            <NavDrawer
              key={el.whereTo}
              text={el.text}
              icon={el.icon}
              whereTo={el.whereTo}
            />
          ))}
        </MemoryRouter>
      </themeContext.Provider>,
    );
    const text = screen.getByText('Star page');
    expect(text).toBeInTheDocument();
  });
  it('should render a div in the dark mode', () => {
    const drawerOptions = [
      { whereTo: '/', icon: <FaStar className="text-xl" />, text: 'Star page' },
    ];
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: false, changeTheme }}>
        <MemoryRouter>
          {drawerOptions.map((el) => (
            <NavDrawer
              key={el.whereTo}
              text={el.text}
              icon={el.icon}
              whereTo={'false'}
            />
          ))}
        </MemoryRouter>
      </themeContext.Provider>,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement).toHaveClass('text-gray-200');
  });
  it('should render a div in the light mode', () => {
    const drawerOptions = [
      { whereTo: '/', icon: <FaStar className="text-xl" />, text: 'Star page' },
    ];
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MemoryRouter>
          {drawerOptions.map((el) => (
            <NavDrawer
              key={el.whereTo}
              text={el.text}
              icon={el.icon}
              whereTo={el.whereTo}
            />
          ))}
        </MemoryRouter>
      </themeContext.Provider>,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement).toHaveClass('text-black');
  });
  it('should match a snapshot', () => {
    const drawerOptions = [
      { whereTo: '/', icon: <FaStar className="text-xl" />, text: 'Star page' },
    ];
    const changeTheme = () => {};
    render(
      <themeContext.Provider value={{ light: true, changeTheme }}>
        <MemoryRouter>
          {drawerOptions.map((el) => (
            <NavDrawer
              key={el.whereTo}
              text={el.text}
              icon={el.icon}
              whereTo={el.whereTo}
            />
          ))}
        </MemoryRouter>
      </themeContext.Provider>,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement?.parentElement).toMatchSnapshot();
  });
});
