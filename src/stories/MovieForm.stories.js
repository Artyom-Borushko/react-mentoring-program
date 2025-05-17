import { fn } from '@storybook/test';
import MovieForm from '../components/movie-form/MovieForm';
import listOfMoviesMock from '../data/moviesListMock';

export default {
  component: MovieForm,
};

export const Default = {
  args: {
    initialMovie: listOfMoviesMock[2],
    onSubmit: fn(),
  },
};
