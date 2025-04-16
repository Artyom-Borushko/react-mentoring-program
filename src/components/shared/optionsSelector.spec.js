import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import OptionsSelector from "./OptionsSelector";
import {movieDropdownOptions} from "../../data/dropdownsOptions";

describe("OptionsSelector component tests", () => {

    it("renders OptionsSelector component with three dots expand icon", () => {
        const {container} = render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
            controlImageSrc={'images/options-selector/threeDotsExpandOptionsIcon.png'}
        />);

        expect(container).toMatchSnapshot();
    });

    it("renders OptionsSelector component with triangle down icon", () => {
        const {container} = render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
            controlImageSrc={'images/icons/redTriangleDown.png'}
        />);

        expect(container).toMatchSnapshot();
    });

    it("does not displays options dropdown by default", () => {
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
        />);

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("displays options dropdown after click on options selector icon", async () => {
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: "expand options"}));

        expect(screen.getByText(movieDropdownOptions[0])).toBeInTheDocument();
    });

    it("closes options dropdown after click in any place", async () => {
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(document.body);

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("closes options dropdown after click in cross icon", async () => {
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByRole('img', {name: 'close dropdown'}));

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("close options dropdown after click in dropdown element", async () => {
        const mockClickHandler = jest.fn();
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
            onDropdownSelection={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByText(movieDropdownOptions[0]));

        expect(screen.queryByText(movieDropdownOptions[0])).not.toBeInTheDocument();
    });

    it("event listener is called when selecting option from dropdown", async () => {
        const mockClickHandler = jest.fn();
        render(<OptionsSelector
            dropdownOptions={movieDropdownOptions}
            onDropdownSelection={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByText(movieDropdownOptions[1]));

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});
