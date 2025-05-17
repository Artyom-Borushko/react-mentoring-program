import { fn } from '@storybook/test';
import GenreSelect from '../components/movie-tile-sort/sorters/genre-sorter/GenreSelect';
import { listOfGenres } from '../data/movieGenres';

export default {
  component: GenreSelect,
};

export const HorrorGenreSelect = {
  args: {
    selectedGenre: 'horror',
    listOfGenres,
    genreSelectHandler: fn(),
  },
};

export const DocumentaryGenreSelect = {
  args: {
    selectedGenre: 'documentary',
    listOfGenres,
    genreSelectHandler: fn(),
  },
};
