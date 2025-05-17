import { fn } from '@storybook/test';
import MoviesSort from '../components/movie-tile-sort/MoviesSort';
import { listOfGenres } from '../data/movieGenres';
import { moviesSortDropdownOptions } from '../data/dropdownsOptions';

export default {
  component: MoviesSort,
};

export const Default = {
  args: {
    selectedGenre: listOfGenres[2],
    selectedSortOption: moviesSortDropdownOptions[1],
    sortControlHandler: fn(),
    genreSelectHandler: fn(),
  },
};
