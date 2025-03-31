import MovieTile from '../components/MovieTile';
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
