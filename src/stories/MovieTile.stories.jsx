import MovieTile from '../components/movie-tile/MovieTile';
import {listOfMoviesMock} from "../data/moviesListMock";
import {fn} from "@storybook/test";

export default {
    component: MovieTile,
};

export const Movie = {
    args: {
        movies: listOfMoviesMock,
        clickHandler: fn()
    }
};
