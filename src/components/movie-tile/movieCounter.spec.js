import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import MoviesCounter from './MoviesCounter';
import listOfMoviesMock from '../../data/moviesListMock';

describe('MoviesCounter component tests', () => {
  it('renders correct number of movies', () => {
    const { container } = render(<MoviesCounter movies={listOfMoviesMock} />);

    expect(container.textContent).toEqual(`${listOfMoviesMock.length} movies found`);
  });

  it('renders 0 number of movies when empty movies list is passed', () => {
    const { container } = render(<MoviesCounter movies={[]} />);

    expect(container.textContent).toEqual('0 movies found');
  });
});
