import { fn } from '@storybook/test';
import MovieDetailsHeader from '../components/movie-details/header/MovieDetailsHeader';

export default {
  component: MovieDetailsHeader,
};

export const Default = {
  args: {
    searchAllHandler: fn(),
  },
};
