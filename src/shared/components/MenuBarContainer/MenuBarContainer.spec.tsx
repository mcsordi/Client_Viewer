import { render, screen } from '@testing-library/react';
import { MenuBarContainer } from './MenuBarContainer';
import React from 'react';

describe('<MenuBarContainer/>', () => {
  it('should render a MenuBarComponent without children', () => {
    const { container } = render(<MenuBarContainer />);
    expect(container.children).toHaveLength(1);
    expect(container).toBeInTheDocument();
  });
  it('should render a MenuBarComponent with children', () => {
    render(<MenuBarContainer visible bVisible text="novo" />);
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode?.firstChild).toBeInTheDocument();
  });
  it('should match a snapshot', () => {
    render(<MenuBarContainer visible bVisible text="novo" />);
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
    expect(textButton.parentNode).toMatchSnapshot();
  });
});
