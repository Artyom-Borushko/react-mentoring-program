import './movieForm.css';
import React, { useRef } from "react";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import {getFormDataObject, getMovieRuntime} from "../../utilities/utilities";

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
            <div className={'movie-form-content'}>
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
                    initialValue={initialMovie.release_date}
                    ref={releaseDateRef}
                ></Input>
                <Input
                    labelText={'Movie URL'}
                    type={'text'}
                    id={'movieUrl'}
                    initialValue={initialMovie.src || '/images/movies-list/bohemianRhapsody.png'}
                    ref={urlRef}
                ></Input>
                <Input
                    labelText={'Rating'}
                    type={'text'}
                    id={'movieRating'}
                    initialValue={initialMovie.vote_average}
                    ref={ratingRef}
                ></Input>
                <Input
                    labelText={'Genre'}
                    type={'checkbox'}
                    id={'movieGenre'}
                    dropdownOptions={initialMovie.genres}
                    dropdownOpenerText={'Select Genre'}
                    ref={genreRef}
                ></Input>
                <Input
                    labelText={'Runtime'}
                    type={'text'}
                    id={'movieRuntime'}
                    initialValue={getMovieRuntime(initialMovie.runtime)}
                    ref={runtimeRef}
                ></Input>
                <Input
                    labelText={'Overview'}
                    type={'textarea'}
                    id={'movieOverview'}
                    initialValue={initialMovie.overview}
                    ref={overviewRef}
                ></Input>
            </div>
            <div className={'movie-form-confirmation-control'}>
                <Button type={'submit'}>
                    Reset
                </Button>
                <Button type={'submit'}>
                    Submit
                </Button>
            </div>
        </form>
    )
}
