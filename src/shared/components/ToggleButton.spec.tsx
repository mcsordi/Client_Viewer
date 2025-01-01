import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToggleButton } from './ToggleButton';

describe('<ToggleButton/>', () => {
  it('should render a button with Esconder text inside', () => {
    render(<ToggleButton visible={true} />);
    const button = screen.getByText('Esconder');
    expect(button).toBeInTheDocument();
  });
  it('should render a button with Mostrar text inside', () => {
    render(<ToggleButton visible={false} />);
    const button = screen.getByText('Mostrar');
    expect(button).toBeInTheDocument();
  });
  it('should match a snapshot', () => {
    render(<ToggleButton visible={false} />);
    const button = screen.getByText('Mostrar');
    expect(button).toMatchSnapshot();
  });
});
