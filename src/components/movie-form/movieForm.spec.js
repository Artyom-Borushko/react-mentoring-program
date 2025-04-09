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
            movieTitle: 'Pulp Fiction',
            movieReleaseDate: '1994-01-23',
            movieUrl: '/images/movies-list/pulpFiction.png',
            movieRating: '9.2',
            movieRuntime: '2h 22min',
            movieOverview: 'Lorem ipsum dolor sit amet. Eum autem quod aut dolorem voluptatum nam dolores sunt. Ea velit placeat ea corporis illo rem quod nulla. Et maxime placeat ut vero placeat et harum sequi. A Quis expedita id dolores sint id repellendus atque sit suscipit obcaecati vel quia galisum quo cumque internos!'
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

        expect(input.value).toBe('Pulp Fiction23456')

        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        expect(submittedForm.movieTitle).toEqual('Pulp Fiction23456');
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
        await userEvent.click(screen.getByDisplayValue('comedy'));
        await userEvent.click(screen.getByDisplayValue('oscar'));
        await userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        expect(submittedForm.movieGenre).toEqual(['comedy', 'oscar']);
    });
});
