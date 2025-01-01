import { render, screen } from '@testing-library/react';
import { FaStar } from 'react-icons/fa';
import React from 'react';
import { NavDrawer } from './NavDrawer';

describe('<ImgContainer/>', () => {
  it('should render a component with an icon and text', () => {
    render(
      <NavDrawer icon={<FaStar className="text-xl" />} text="Star page" />,
    );
    const text = screen.getByText('Star page');
    expect(text.previousElementSibling).toHaveClass('text-xl');
  });
  it('should render a div in the dark mode', () => {
    render(
      <NavDrawer
        icon={<FaStar className="text-xl" />}
        text="Star page"
        theme={false}
      />,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement).toHaveClass('text-gray-200');
  });
  it('should render a div in the light mode', () => {
    render(
      <NavDrawer
        icon={<FaStar className="text-xl" />}
        text="Star page"
        theme={true}
      />,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement).toHaveClass('text-black');
  });
  it('should match a snapshot', () => {
    render(
      <NavDrawer
        icon={<FaStar className="text-xl" />}
        text="Star page"
        theme={true}
      />,
    );
    const text = screen.getByText('Star page');
    expect(text.parentElement).toMatchSnapshot();
  });
});
