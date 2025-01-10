import { render, screen } from '@testing-library/react';
import { MenuContainerTools } from './MenuContainerTools';
import React from 'react';

describe('<MenuContainerTools/>', () => {
  it('should render a MenuContainerTools component', () => {
    render(
      <MenuContainerTools visible>
        <p>teste</p>
      </MenuContainerTools>,
    );
    const textContainer = screen.getByText('teste');
    expect(textContainer.parentElement).toBeInTheDocument();
  });
  it('should render a MenuContainerTools component and not be rendering in the document', () => {
    const { container } = render(
      <MenuContainerTools visible={false}>
        <p>teste</p>
      </MenuContainerTools>,
    );

    expect(container).not.toHaveClass();
    expect(container.children).toHaveLength(0);
  });
  it('should match a snapshot', () => {
    const { container } = render(
      <MenuContainerTools visible>
        <p>teste</p>
      </MenuContainerTools>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
