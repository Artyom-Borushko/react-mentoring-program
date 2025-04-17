import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SearchForm from "./SearchForm";

describe("SearchForm component tests", () => {
    const placeholder = 'What do you want to watch?';
    const fakeSearchString = 'new search text';

    it("renders SearchForm component with initial provided search", () => {
        render(<SearchForm placeholder={placeholder}/>);

        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it("submits correct search string on button click", async () => {
        const mockSearchHandler = jest.fn();
        render(<SearchForm
            placeholder={placeholder}
            searchHandler={mockSearchHandler}/>
        );

        await userEvent.type(
            screen.getByPlaceholderText(placeholder),
            fakeSearchString
        );
        await userEvent.click(screen.getByRole('button', {name: 'Search'}))

        expect(mockSearchHandler).toHaveBeenCalledWith(fakeSearchString);
    });

    it("submits correct search string on enter press", async () => {
        const mockSearchHandler = jest.fn();
        render(<SearchForm
            placeholder={placeholder}
            searchHandler={mockSearchHandler}/>
        );

        await userEvent.type(
            screen.getByPlaceholderText('What do you want to watch?'),
            fakeSearchString
        );
        await userEvent.keyboard('{Enter}');

        expect(mockSearchHandler).toHaveBeenCalledWith(fakeSearchString);
    });
});
