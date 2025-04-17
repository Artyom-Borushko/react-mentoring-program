import Input from "../components/shared/input/Input";
import {listOfMoviesMock} from "../data/moviesListMock";

export default {
    component: Input,
    parameters: {
        backgrounds: { default: 'Dark', },
    },
};

export const CheckboxInput = {
    args: {
        labelText: 'Genre',
        id: 'movieGenre',
        type: 'checkbox',
        dropdownOptions: listOfMoviesMock[2].relevantGenres,
        dropdownOpenerText: 'Select Genre',
    }
};

export const TextareaInput = {
    args: {
        labelText: 'Overview',
        id: 'movieOverview',
        type: 'textarea',
        initialValue: listOfMoviesMock[2].description,
    }
};

export const TextInput = {
    args: {
        labelText: 'Title',
        id: 'movieTitle',
        type: 'text',
        initialValue: listOfMoviesMock[2].title,
    }
};
