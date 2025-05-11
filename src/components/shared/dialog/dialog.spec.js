import {render, screen} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Dialog from "./Dialog";
import MovieForm from "../../movie-form/MovieForm";

describe("Dialog component tests", () => {

    it("renders empty Dialog component", () => {
        const {container} = render(<Dialog
            title={'test title'}
        >
            <button className={'fallback-focus'}>Focusable Element</button>
        </Dialog>);

        expect(container).toMatchSnapshot();
    });

    it("renders Dialog component with passed children", () => {
        render(
            <>
                <Dialog
                    title={'test title'}
                >
                    <MovieForm/>
                    <button className={'fallback-focus'}>Focusable Element</button>
                </Dialog>
            </>
        );

        const input = screen.getByLabelText('Overview');

        expect(input).toBeInTheDocument();
    });
});
