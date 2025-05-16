import React from "react";
import './movieDetails.css';
import {getMovieReleaseYear, getMovieRuntime} from "../../utilities/utilities";
import MovieDetailsHeader from "./header/MovieDetailsHeader";
import {useLoaderData, useOutletContext} from "react-router";

export default function MovieDetails() {

    const {handleSearchAll} = useOutletContext();
    const { movie } = useLoaderData();

    return (
        <>
            <MovieDetailsHeader
                searchAllHandler={handleSearchAll}>
            </MovieDetailsHeader>
            <div className={'movie-details'}>
                <img
                    src={movie.src || '/images/movies-list/bohemianRhapsody.png'}
                    alt='movie details'
                    className={'movie-details-image'}
                    aria-label={'movie details'}
                />

                <div className={'movie-details-information'}>
                    <div className={'movie-details-title-rating'}>
                        <p className={'movie-details-title'}>{movie.title}</p>
                        <p className={'movie-details-rating'}>{movie.vote_average}</p>
                    </div>
                    <p className={'movie-details-genres'}>{movie.genres.join(', ')}</p>

                    <div className={'movie-details-year-duration'}>
                     <span className={'movie-details-year'}>
                         {getMovieReleaseYear(movie.release_date)}
                     </span>
                        <span className={'movie-details-duration'}>
                         {getMovieRuntime(movie.runtime)}
                     </span>
                    </div>

                    <p className={'movie-details-description'}>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </>
    );
}
