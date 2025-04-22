import {render} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import {listOfMoviesMock} from "../../../data/moviesListMock";
import Input from "./Input";

describe("Input component tests", () => {

    it("renders checkbox input", () => {
        const {container} = render(<Input
            labelText={'Genre'}
            id={'movieGenre'}
            type={'checkbox'}
            dropdownOptions={listOfMoviesMock[2].relevantGenres}
            dropdownOpenerText={'Select Genre'}
        />);

        expect(container).toMatchSnapshot();
    });

    it("renders textarea input", () => {
        const {container} = render(<Input
            labelText={'Overview'}
            id={'movieOverview'}
            type={'textarea'}
            initialValue={listOfMoviesMock[2].overview}
        />);

        expect(container).toMatchSnapshot();
    });

    it("renders text input", () => {
        const {container} = render(<Input
            labelText={'Title'}
            id={'movieTitle'}
            type={'text'}
            initialValue={listOfMoviesMock[2].title}
        />);

        expect(container).toMatchSnapshot();
    });
});
