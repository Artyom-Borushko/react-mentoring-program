import { fn } from '@storybook/test';
import GenreSelect from '../components/GenreSelect';
import {listOfGenres} from "../data/movieGenres";

export default {
    component: GenreSelect,
};

export const HorrorGenreSelect = {
    args: {
        selectedGenre: 'horror',
        listOfGenres,
        selectHandler: fn(),
    }
};

export const DocumentaryGenreSelect = {
    args: {
        selectedGenre: 'documentary',
        listOfGenres,
        selectHandler: fn(),
    }
};
