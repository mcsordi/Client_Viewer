import { render, screen } from '@testing-library/react';
import { ImgContainer } from './ImgContainer';

describe('<ImgContainer/>', () => {
  it('should render an img with a image adress', () => {
    const { container } = render(<ImgContainer path="image.png" />);
    expect(container.firstChild?.firstChild).toHaveAttribute(
      'src',
      'image.png',
    );
    expect(container.firstChild?.firstChild).toHaveAttribute(
      'alt',
      'profile image',
    );
  });
  it('should match a snapshot', () => {
    const { container } = render(<ImgContainer path="image.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
