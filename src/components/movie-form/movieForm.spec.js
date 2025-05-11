import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import MovieForm from "./MovieForm";
import {listOfMoviesMock} from "../../data/moviesListMock";

describe("MovieForm component tests", () => {

    it("renders empty MovieForm component", () => {
        const {container} = render(<MovieForm/>);

        expect(container).toMatchSnapshot();
    });

    it("renders empty MovieForm component with initial movie", () => {
        const {container} = render(<MovieForm initialMovie={listOfMoviesMock[0]}/>);

        expect(container).toMatchSnapshot();
    });

    it("submits form with movie data", async () => {
        let submittedForm;
        const mockCallback = jest.fn(event => submittedForm = event);
        render(<MovieForm
            onSubmit={mockCallback}
        />);

        const titleInput = screen.getByLabelText('Title');
        await userEvent.click(titleInput);
        await userEvent.keyboard('test title');
        expect(titleInput.value).toBe('test title');


        const releaseDateInput = screen.getByLabelText('Release date');
        await userEvent.click(releaseDateInput);
        await userEvent.keyboard('2010-12-12');
        expect(releaseDateInput.value).toBe('2010-12-12');

        const movieUrlInput = screen.getByLabelText('Movie URL');
        await userEvent.click(movieUrlInput);
        await userEvent.keyboard('https://www.google.com/maps/');
        expect(movieUrlInput.value).toBe('https://www.google.com/maps/');

        const ratingInput = screen.getByLabelText('Rating');
        await userEvent.click(ratingInput);
        await userEvent.keyboard('6.2');
        expect(ratingInput.value).toBe('6.2');


        await userEvent.click(screen.getByRole('button', {name: 'Select Genres'}));
        await userEvent.click(screen.getByDisplayValue('Family'));
        await userEvent.click(screen.getByDisplayValue('Action'));

        const runtimeInput = screen.getByLabelText('Runtime');
        await userEvent.click(runtimeInput);
        await userEvent.keyboard('77');
        expect(runtimeInput.value).toBe('77');

        const descriptionInput = screen.getByLabelText('Overview');
        await userEvent.click(descriptionInput);
        await userEvent.keyboard('test movie description');
        expect(descriptionInput.value).toBe('test movie description');


        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));
        expect(submittedForm).toEqual( {
            movieTitle: 'test title',
            movieReleaseDate: '2010-12-12',
            movieUrl: 'https://www.google.com/maps/',
            movieRating: '6.2',
            movieGenres: [ 'Family', 'Action' ],
            movieRuntime: '77',
            movieOverview: 'test movie description'
        });
    });
});
