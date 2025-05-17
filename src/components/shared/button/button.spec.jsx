import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button component tests', () => {
  it('renders Button component with children passed to it', () => {
    const { container } = render(<Button>test text</Button>);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('test text')).toBeInTheDocument();
  });
});
