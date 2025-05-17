import MoviesCounter from '../components/movie-tile/MoviesCounter';
import listOfMoviesMock from '../data/moviesListMock';

export default {
  component: MoviesCounter,
};

export const DefaultNumberOfMovies = {
  args: {
    movies: listOfMoviesMock,
  },
};

export const EmptyMoviesListPassed = {
  args: {
    movies: [],
  },
};
