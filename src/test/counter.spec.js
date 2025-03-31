import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Counter} from "../components/Counter";
import React from "react";

describe("Counter component tests", () => {
    const initialValue = 456;

    it("renders Counter component with initial provided props", () => {
        render(<Counter initialCounter={initialValue} />);

        expect(screen.getByText(`Counter: ${initialValue}`)).toBeInTheDocument();
    });

    it("click event on 'decrement' button decrements the displayed value", async () => {
        render(<Counter initialCounter={initialValue} />);

        await userEvent.click(screen.getByRole('button', {name: 'Decrement'}));

        expect(screen.getByText(`Counter: ${initialValue - 1}`)).toBeInTheDocument();
    });

    it("click event on 'increment' button increments the displayed value", async () => {
        render(<Counter initialCounter={initialValue} />);

        await userEvent.click(screen.getByRole('button', {name: 'Increment'}));

        expect(screen.getByText(`Counter: ${initialValue + 1}`)).toBeInTheDocument();
    });
});
