import {render, screen} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import MovieDetailsHeader from "./MovieDetailsHeader";

describe("MovieDetailsHeader component tests", () => {

    it("renders MovieDetailsHeader component", () => {
        const {container} = render(<MovieDetailsHeader/>);

        expect(container).toMatchSnapshot();
    });

    it("search image is clickable", async () => {
        const mockClickHandler = jest.fn();
        render(<MovieDetailsHeader
            searchAllHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'search icon'}));

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});
