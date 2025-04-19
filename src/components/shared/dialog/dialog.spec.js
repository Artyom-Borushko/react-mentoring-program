import {render, screen} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Dialog from "./Dialog";
import MovieForm from "../../movie-form/MovieForm";
import {listOfMoviesMock} from "../../../data/moviesListMock";

describe("Dialog component tests", () => {

    it("renders empty Dialog component", () => {
        render(<Dialog
            title={'test title'}
        />);

        expect(document.body).not.toHaveTextContent("test123");
    });

    it("renders Dialog component with passed children", () => {
        render(<Dialog
            title={'test title'}
            children={<MovieForm initialMovie={listOfMoviesMock[5]}/>}
        />);

        const input = screen.getByLabelText('Overview');

        expect(input.value).toEqual(listOfMoviesMock[5].description);
    });
});
