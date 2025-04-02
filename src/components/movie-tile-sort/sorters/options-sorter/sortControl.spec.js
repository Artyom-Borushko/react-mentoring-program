import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import '@testing-library/jest-dom';
import SortControl from "./SortControl";
import {moviesSortDropdownOptions} from "../../../../data/dropdownsOptions";

describe("SortControl component tests", () => {

    it("renders SortControl component", () => {
        const {container} = render(<SortControl
            selectedSortOption={'Release date'}
        />);

        expect(container).toMatchSnapshot();
    });

    it("displays changed sorted by Release date text", async () => {
        const mockClickHandler = jest.fn();
        render(<SortControl
            selectedSortOption={'RelEase date'}
            sortControlHandler={mockClickHandler}
        />);

        await userEvent.click(screen.getByRole('img', {name: 'expand options'}));
        await userEvent.click(screen.getByText(moviesSortDropdownOptions[0]));

        expect(screen.queryByText(moviesSortDropdownOptions[0])).not.toBeInTheDocument();
        expect(screen.getByText('RelEase date')).toBeInTheDocument();
    });
});
