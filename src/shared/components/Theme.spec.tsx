import { render } from '@testing-library/react';
import { Theme } from './Theme';
import React from 'react';

describe('<Theme/>', () => {
  it('should render a theme button', () => {
    const { container } = render(<Theme theme={false} />);
    expect(container.firstChild).toHaveClass(
      'rounded-md absolute right-0 border p-2 bg-white',
    );
  });
  it('should render a button with slate background', () => {
    const { container } = render(<Theme theme={true} />);
    expect(container.firstChild).toHaveClass('bg-slate-700');
    expect(container.firstChild?.firstChild).toHaveClass('text-yellow-500');
  });
  it('should render a button with white background', () => {
    const { container } = render(<Theme theme={false} />);
    expect(container.firstChild).not.toHaveClass('bg-slate-700');
    expect(container.firstChild?.firstChild).toHaveClass('text-gray-700');
  });
  it('should match a snapshot', () => {
    const { container } = render(<Theme theme={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
