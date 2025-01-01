import { render, screen } from '@testing-library/react';
import { BackgroundContainer } from './BackgroundContainer';
import React from 'react';

describe('<BackgroundContainer/>', () => {
  it('should render the background in the dark mode', () => {
    render(
      <BackgroundContainer theme={false}>
        <p>hola</p>
      </BackgroundContainer>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toHaveClass('bg-zinc-900');
  });
  it('should render the background in the light mode', () => {
    render(
      <BackgroundContainer theme={true}>
        <p>hola</p>
      </BackgroundContainer>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toHaveClass('bg-slate-200');
  });
  it('should match a snapshot', () => {
    render(
      <BackgroundContainer theme={true}>
        <p>hola</p>
      </BackgroundContainer>,
    );
    const text = screen.getByText('hola');
    expect(text.parentElement).toMatchSnapshot();
  });
});
