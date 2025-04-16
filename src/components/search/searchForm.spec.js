import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SearchForm from "./SearchForm";

describe("SearchForm component tests", () => {
    const initialSearch = 'Initial search test string';
    const fakeSearchString = 'new search text';

    it("renders SearchForm component with initial provided search", () => {
        render(<SearchForm initialSearch={initialSearch} />);

        expect(screen.getByDisplayValue(initialSearch)).toBeInTheDocument();
    });

    it("submits correct search string on button click", async () => {
        const mockSearchHandler = jest.fn();
        render(<SearchForm
            initialSearch={initialSearch}
            searchHandler={mockSearchHandler}/>
        );

        await userEvent.type(
            screen.getByPlaceholderText('What do you want to watch?'),
            fakeSearchString
        );
        await userEvent.click(screen.getByRole('button', {name: 'Search'}))

        expect(mockSearchHandler).toHaveBeenCalledWith(initialSearch.concat(fakeSearchString));
    });

    it("submits correct search string on enter press", async () => {
        const mockSearchHandler = jest.fn();
        render(<SearchForm
            initialSearch={initialSearch}
            searchHandler={mockSearchHandler}/>
        );

        await userEvent.type(
            screen.getByPlaceholderText('What do you want to watch?'),
            fakeSearchString
        );
        await userEvent.keyboard('{Enter}');

        expect(mockSearchHandler).toHaveBeenCalledWith(initialSearch.concat(fakeSearchString));
    });
});
