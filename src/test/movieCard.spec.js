import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import MovieCard from "../components/MovieCard";

describe("MovieCard component tests", () => {

    it("renders MovieCard component", () => {
        const {container} = render(<MovieCard
            title={'Kill1 Bill: Vol 1'}
            releaseYear={'1995'}
            relevantGenres={['comedy', 'crime', 'oscar']}
            src={'/images/movies-list/killBillVol2.png'}
        />);

        expect(container).toMatchSnapshot();
    });

    it("event listener is working clicking on image", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieCard
                title={'Kill1 Bill: Vol 1'}
                releaseYear={'1995'}
                relevantGenres={['comedy', 'crime', 'oscar']}
                src={'/images/movies-list/killBillVol2.png'}
                clickHandler={mockClickHandler}
            />);

        await userEvent.click(screen.getByRole('img', {name: 'movie card'}));

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it("event listener is not working clicking on movie releaseYear", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieCard
            title={'Kill1 Bill: Vol 1'}
            releaseYear={'1995'}
            relevantGenres={['comedy', 'crime', 'oscar']}
            src={'/images/movies-list/killBillVol2.png'}
            clickHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getByText('1995'));

        expect(mockClickHandler).toHaveBeenCalledTimes(0);
    });
});
