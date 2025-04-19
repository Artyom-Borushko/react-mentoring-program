import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import MovieForm from "./MovieForm";
import {listOfMoviesMock} from "../../data/moviesListMock";
import {getFormDataObject} from "../../utilities/utilities";

describe("MovieForm component tests", () => {

    let submittedForm;
    function getSubmittedForm(event) {
        submittedForm = getFormDataObject(event);
    }

    afterEach(() => {
        submittedForm = undefined;
    });

    it("renders empty MovieForm component", () => {
        const {container} = render(<MovieForm/>);

        expect(container).toMatchSnapshot();
    });

    it("renders empty MovieForm component with initial movie", () => {
        const {container} = render(<MovieForm initialMovie={listOfMoviesMock[0]}/>);

        expect(container).toMatchSnapshot();
    });

    it("submits form with initial movie data", async () => {
        const mockCallback = jest.fn(event => getSubmittedForm(event));
        render(<MovieForm
            initialMovie={listOfMoviesMock[0]}
            onSubmit={mockCallback}
        />);

        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        expect(submittedForm).toEqual({
            movieTitle: 'Fifty Shades Freed',
            movieReleaseDate: '2018-02-07',
            movieUrl: '/images/movies-list/bohemianRhapsody.png',
            movieRating: '6.1',
            movieRuntime: '1h 46min',
            movieOverview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.'
        });
    });

    it("submits form with modified title", async () => {
        const mockCallback = jest.fn(event => getSubmittedForm(event));
        render(<MovieForm
            initialMovie={listOfMoviesMock[0]}
            onSubmit={mockCallback}
        />);

        const input = screen.getByLabelText('Title');
        await userEvent.click(input);
        await userEvent.keyboard('23456')

        expect(input.value).toBe('Fifty Shades Freed23456')

        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        expect(submittedForm.movieTitle).toEqual('Fifty Shades Freed23456');
    });

    it("submits form with modified textarea", async () => {
        const mockCallback = jest.fn(event => getSubmittedForm(event));
        render(<MovieForm
            initialMovie={listOfMoviesMock[0]}
            onSubmit={mockCallback}
        />);

        const input = screen.getByLabelText('Overview');
        await userEvent.clear(input);
        await userEvent.keyboard('123 test');

        expect(input.value).toBe('123 test');

        await userEvent.click(screen.getByRole('button', {name: 'Reset'}));

        expect(submittedForm.movieOverview).toEqual('123 test');
    });

    it("submits form with modified checkbox", async () => {
        const mockCallback = jest.fn(event => getSubmittedForm(event));
        render(<MovieForm
            initialMovie={listOfMoviesMock[2]}
            onSubmit={mockCallback}
        />);

        await userEvent.click(screen.getByRole('button', {name: 'Select Genre'}));
        await userEvent.click(screen.getByDisplayValue('Adventure'));
        await userEvent.click(screen.getByDisplayValue('Fantasy'));
        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        expect(submittedForm.movieGenre).toEqual(['Fantasy', 'Adventure']);
    });
});
