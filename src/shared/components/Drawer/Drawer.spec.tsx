import { render } from '@testing-library/react';
import { Drawer } from './Drawer.tsx';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<Drawer/>', () => {
  it('should render Drawer component in the dark mode', () => {
    const { container } = render(
      <MemoryRouter>
        <Drawer theme={false} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass('bg-zinc-700');
  });
  it('should render Drawer component in the light mode', () => {
    const { container } = render(
      <MemoryRouter>
        <Drawer theme={true} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass('bg-white');
  });
  it('should render match a snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Drawer theme={true} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
