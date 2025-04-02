import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import GenreSelect from "./GenreSelect";
import {listOfGenres} from "../../../../data/movieGenres";
import '@testing-library/jest-dom';

describe("GenreSelect component tests", () => {

    it("renders all genres", () => {
        render(<GenreSelect listOfGenres={listOfGenres} />);

        const allGenresButtons = screen.getAllByRole('button');

        expect(allGenresButtons).toHaveLength(5);
        allGenresButtons.forEach((genreButton, index) => {
            expect(genreButton).toHaveTextContent(listOfGenres[index]);
        });
    });

    it("highlights initial provided genre", () => {
        render(<GenreSelect
            listOfGenres={listOfGenres}
            selectedGenre={'comedy'}/>
        );

        const genreButton = screen.getByRole('button', {name: 'comedy'});

        expect(genreButton).toHaveClass('genre-button selected');
    });

    it("selects clicked genre", async () => {
        const mockClickHandler = jest.fn();
        render(<GenreSelect
            listOfGenres={listOfGenres}
            selectedGenre={'comedy'}
            genreSelectHandler={mockClickHandler}/>
        );

        await userEvent.click(screen.getByRole('button', {name: 'all'}));

        expect(mockClickHandler).toHaveBeenCalledWith('all');
    });
});
