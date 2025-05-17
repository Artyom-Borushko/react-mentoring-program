import { fn } from '@storybook/test';
import MovieTile from '../components/movie-tile/MovieTile';
import listOfMoviesMock from '../data/moviesListMock';

export default {
  component: MovieTile,
};

export const Movie = {
  args: {
    movies: listOfMoviesMock,
    clickHandler: fn(),
  },
};
