import { fn } from '@storybook/test';
import MovieDetails from '../components/movie-details/MovieDetails';
import listOfMoviesMock from '../data/moviesListMock';

export default {
  component: MovieDetails,
};

export const FirstMovieDetails = {
  args: {
    movie: listOfMoviesMock[0],
    clickHandler: fn(),
  },
};

export const LastMovieDetails = {
  args: {
    movie: listOfMoviesMock[listOfMoviesMock.length - 1],
    clickHandler: fn(),
  },
};
