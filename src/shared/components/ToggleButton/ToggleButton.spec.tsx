import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToggleButton } from './ToggleButton';

describe('<ToggleButton/>', () => {
  it('should render a button with a svg icon inside with class rotate-180 and transition-all', () => {
    const { container } = render(<ToggleButton visible={true} />);
    expect(container.firstChild?.firstChild).toHaveClass(
      'rotate-180 transition-all',
    );
  });
  it('should render a button with sgv icon inside', () => {
    const { container } = render(<ToggleButton visible={false} />);
    expect(container.firstChild?.firstChild).not.toHaveClass('rotate-180');
    expect(container.firstChild?.firstChild).toHaveClass('transition-all');
  });
  it('should match a snapshot', () => {
    const { container } = render(<ToggleButton visible={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
