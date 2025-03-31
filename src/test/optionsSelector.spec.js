import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import OptionsSelector from "../components/OptionsSelector";
import {movieDropdownOptions} from "../data/dropdownsOptions";

describe("OptionsSelector component tests", () => {

    it("renders OptionsSelector component", () => {
        const {container} = render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        expect(container).toMatchSnapshot();
    });

    it("does not displays options dropdown by default", () => {
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("displays options dropdown after click on options selector icon", async () => {
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));

        expect(screen.getByText(movieDropdownOptions[0])).toBeInTheDocument();
    });

    it("closes options dropdown after click in any place", async () => {
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(document.body);

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("closes options dropdown after click in cross icon", async () => {
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByRole('img', {name: 'close dropdown'}));

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("does not close options dropdown after click in dropdown element", async () => {
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByText(movieDropdownOptions[0]));

        expect(screen.getByText(movieDropdownOptions[0])).toBeInTheDocument();
    });

    it("event listener is called when selecting option from dropdown", async () => {
        const mockClickHandler = jest.fn();
        render(<OptionsSelector
            movieDropdownOptions={movieDropdownOptions}
            onDropdownSelection={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByText(movieDropdownOptions[1]));

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});
