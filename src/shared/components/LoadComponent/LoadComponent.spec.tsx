import { render } from '@testing-library/react';
import { LoadComponent } from './LoadComponent';

describe('<LoadComponent/>', () => {
  it('should render a LoadComponent', () => {
    const { container } = render(<LoadComponent />);
    expect(container.firstChild).toHaveClass('bg-yellow-400');
    expect(container.firstChild.firstChild).toHaveClass('animate-ping');
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'bg-orange-800',
    );
  });
  it('should match a snapshot', () => {
    const { container } = render(<LoadComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
