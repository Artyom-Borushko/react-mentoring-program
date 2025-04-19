import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import MovieTile from "./MovieTile";
import {listOfMoviesMock} from "../../data/moviesListMock";

describe("MovieTile component tests", () => {

    it("renders MovieTile component", () => {
        const {container} = render(<MovieTile
            movies={listOfMoviesMock}
        />);

        expect(container).toMatchSnapshot();
    });

    it("event listener is working clicking on image", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieTile
            movies={listOfMoviesMock}
            clickHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getAllByRole('img', {name: 'movie card'})[0]);

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it("event listener is not working clicking on movie releaseYear", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieTile
            movies={listOfMoviesMock}
            clickHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getAllByText('2018')[0]);

        expect(mockClickHandler).toHaveBeenCalledTimes(0);
    });
});
