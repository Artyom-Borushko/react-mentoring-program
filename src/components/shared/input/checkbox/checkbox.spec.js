import {render} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import {Formik} from "formik";
import Checkbox from "./Checkbox";
import {movieGenres} from "../../../../data/movieGenres";

describe("Checkbox input component tests", () => {

    it("renders checkbox input with Formik", () => {
        const { container } = render(
            <Formik
                initialValues={{ movieOverview: "" }}
                onSubmit={() => {}}
            >
                <div>
                    {movieGenres.map((genre) => (
                        <Checkbox
                            key={genre}
                            name="movieGenres"
                            id="movieGenres"
                            value={genre}
                            label={genre}
                        />
                    ))}
                </div>
            </Formik>
        );

        expect(container).toMatchSnapshot();
    });
});
