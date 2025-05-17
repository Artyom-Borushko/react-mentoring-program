import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchForm from './SearchForm';

describe('SearchForm component tests', () => {
  const placeholder = 'What do you want to watch?';
  const fakeSearchString = 'new search text';

  it('renders SearchForm component with initial provided search', () => {
    render(<SearchForm placeholder={placeholder} />);
    const placeholderValue = screen.getByPlaceholderText(placeholder).placeholder;

    expect(placeholderValue).toEqual('What do you want to watch?');
  });

  it('form submits on button click and correct search string is in input', async () => {
    const mockSearchHandler = jest.fn();
    const symbolInputArray = [];
    const setSearchInputValueTest = function (searchInputSybmol) {
      symbolInputArray.push(searchInputSybmol);
    };
    render(<SearchForm
      placeholder={placeholder}
      searchHandler={mockSearchHandler}
      searchInputValue=""
      setSearchInputValue={setSearchInputValueTest}
    />);

    await userEvent.type(
      screen.getByPlaceholderText(placeholder),
      fakeSearchString,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(mockSearchHandler).toHaveBeenCalledTimes(1);
    expect(symbolInputArray.join('')).toEqual(fakeSearchString);
  });

  it('form submits on enter press and correct search string is in input', async () => {
    const mockSearchHandler = jest.fn();
    const symbolInputArray = [];
    const setSearchInputValueTest = function (searchInputSybmol) {
      symbolInputArray.push(searchInputSybmol);
    };
    render(<SearchForm
      placeholder={placeholder}
      searchHandler={mockSearchHandler}
      searchInputValue=""
      setSearchInputValue={setSearchInputValueTest}
    />);

    await userEvent.type(
      screen.getByPlaceholderText('What do you want to watch?'),
      fakeSearchString,
    );
    await userEvent.keyboard('{Enter}');

    expect(mockSearchHandler).toHaveBeenCalledTimes(1);
    expect(symbolInputArray.join('')).toEqual(fakeSearchString);
  });
});
