import './movieForm.css';
import React, { useRef } from "react";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import {getFormDataObject} from "../../utilities/utilities";

export default function MovieForm({initialMovie = {}, onSubmit}) {

    const titleRef = useRef(null);
    const releaseDateRef = useRef(null);
    const urlRef = useRef(null);
    const ratingRef = useRef(null);
    const genreRef = useRef(null);
    const runtimeRef = useRef(null);
    const overviewRef = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);

        const formData = getFormDataObject(event);
        console.log("Form Submission Object:", formData);
    };

    return (
        <form
            className={'movie-form'}
            onSubmit={handleFormSubmit}
        >
            <Input
                labelText={'Title'}
                type={'text'}
                id={'movieTitle'}
                initialValue={initialMovie.title}
                ref={titleRef}
            ></Input>
            <Input
                labelText={'Release date'}
                type={'date'}
                id={'movieReleaseDate'}
                initialValue={initialMovie.releaseDate}
                ref={releaseDateRef}
            ></Input>
            <Input
                labelText={'Movie URL'}
                type={'text'}
                id={'movieUrl'}
                initialValue={initialMovie.src}
                ref={urlRef}
            ></Input>
            <Input
                labelText={'Rating'}
                type={'text'}
                id={'movieRating'}
                initialValue={initialMovie.rating}
                ref={ratingRef}
            ></Input>
            <Input
                labelText={'Genre'}
                type={'checkbox'}
                id={'movieGenre'}
                dropdownOptions={initialMovie.relevantGenres}
                dropdownOpenerText={'Select Genre'}
                ref={genreRef}
            ></Input>
            <Input
                labelText={'Runtime'}
                type={'text'}
                id={'movieRuntime'}
                initialValue={initialMovie.duration}
                ref={runtimeRef}
            ></Input>
            <Input
                labelText={'Overview'}
                type={'textarea'}
                id={'movieOverview'}
                initialValue={initialMovie.description}
                ref={overviewRef}
            ></Input>
            <Button type={'submit'}>
                Reset
            </Button>
            <Button type={'submit'}>
                Submit
            </Button>
        </form>
    )
}
