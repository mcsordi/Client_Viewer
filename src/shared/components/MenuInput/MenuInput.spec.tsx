import { render, screen } from '@testing-library/react';
import { MenuInput } from './MenuInput';
import React from 'react';

describe('<MenuInput/>', () => {
  it('should render a MenuInput component', () => {
    render(<MenuInput visible />);
    const inputPlaceHolder = screen.getByPlaceholderText('Pesquisar...');
    expect(inputPlaceHolder).toBeInTheDocument();
  });
  it('should render a MenuInput component without text', () => {
    const { container } = render(<MenuInput />);
    expect(container.children).toHaveLength(0);
  });
  it('should match a snapshot', () => {
    render(<MenuInput visible />);
    const inputPlaceHolder = screen.getByPlaceholderText('Pesquisar...');
    expect(inputPlaceHolder).toMatchSnapshot();
  });
});
