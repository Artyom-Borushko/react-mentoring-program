import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Counter } from '../components/Counter';

describe('Counter component tests', () => {
  const initialValue = 456;

  it('renders Counter component with initial provided props', () => {
    render(<Counter initialCounter={initialValue} />);

    const value = screen.getByText(`Counter: ${initialValue}`).textContent;
    expect(value).toEqual('Counter: 456');
  });

  it("click event on 'decrement' button decrements the displayed value", async () => {
    render(<Counter initialCounter={initialValue} />);

    await userEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    const value = screen.getByText(`Counter: ${initialValue - 1}`).textContent;

    expect(value).toEqual('Counter: 455');
  });

  it("click event on 'increment' button increments the displayed value", async () => {
    render(<Counter initialCounter={initialValue} />);

    await userEvent.click(screen.getByRole('button', { name: 'Increment' }));
    const value = screen.getByText(`Counter: ${initialValue + 1}`).textContent;

    expect(value).toEqual('Counter: 457');
  });
});
