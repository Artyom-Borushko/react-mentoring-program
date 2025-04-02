import {render} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import {listOfMoviesMock} from "../../data/moviesListMock";
import MovieDetails from "./MovieDetails";

describe("MovieDetails component tests", () => {

    it("renders MovieDetails component", () => {
        const {container} = render(<MovieDetails
            movie={listOfMoviesMock[0]}
        />);

        expect(container).toMatchSnapshot();
    });
});
