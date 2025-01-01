import { render } from '@testing-library/react';
import { Drawer } from './Drawer.tsx';
import React from 'react';

describe('<Drawer/>', () => {
  it('should render Drawer component in the dark mode', () => {
    const { container } = render(<Drawer theme={false} />);
    expect(container.firstChild).toHaveClass('bg-zinc-700');
  });
  it('should render Drawer component in the light mode', () => {
    const { container } = render(<Drawer theme={true} />);
    expect(container.firstChild).toHaveClass('bg-white');
  });
  it('should render match a snapshot', () => {
    const { container } = render(<Drawer theme={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
