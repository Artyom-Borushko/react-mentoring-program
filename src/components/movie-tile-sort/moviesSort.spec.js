import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import MoviesSort from './MoviesSort';
import { listOfGenres } from '../../data/movieGenres';
import { moviesSortDropdownOptions } from '../../data/dropdownsOptions';

describe('MoviesSort component tests', () => {
  it('renders MoviesSort component', () => {
    const { container } = render(<MoviesSort
      selectedGenre={listOfGenres[2]}
      selectedSortOption={moviesSortDropdownOptions[1]}
    />);

    expect(container).toMatchSnapshot();
  });
});
