import { fn } from '@storybook/test';
import MovieCard from '../components/movie-tile/movie-card/MovieCard';
import {listOfMoviesMock} from "../data/moviesListMock";

export default {
    component: MovieCard,
};

export const WithClickableImage = {
    args: {
        movie: listOfMoviesMock[0],
        clickHandler: fn()
    }
};
