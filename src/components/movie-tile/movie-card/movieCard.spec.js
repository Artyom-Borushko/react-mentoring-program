import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import MovieCard from "./MovieCard";
import {listOfMoviesMock} from "../../../data/moviesListMock";

describe("MovieCard component tests", () => {

    it("renders MovieCard component", () => {
        const {container} = render(<MovieCard
            movie={listOfMoviesMock[0]}
        />);

        expect(container).toMatchSnapshot();
    });

    it("event listener is working clicking on image", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieCard
            movie={listOfMoviesMock[0]}
            clickHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'movie card'}));

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it("event listener is not working clicking on movie releaseYear", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieCard
            movie={listOfMoviesMock[0]}
            clickHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getByText('2018'));

        expect(mockClickHandler).toHaveBeenCalledTimes(0);
    });
});
