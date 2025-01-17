import { render, screen } from '@testing-library/react';
import { MenuButton } from './MenuButton';

describe('<MenuButton/>', () => {
  it('should render a MenuButton component', () => {
    render(<MenuButton visible text="novo" />);
    const textButton = screen.getByText('novo');
    expect(textButton).toBeInTheDocument();
  });
  it('should not render a MenuButton component', () => {
    const { container } = render(<MenuButton />);
    expect(container).toHaveTextContent('');
  });
  it('should match a snapshot', () => {
    const { container } = render(<MenuButton visible text="nova" />);
    expect(container).toMatchSnapshot();
  });
});
