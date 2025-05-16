import React, {memo} from "react";
import './movieCard.css';
import OptionsSelector from "../../shared/OptionsSelector";
import {movieDropdownOptions} from "../../../data/dropdownsOptions";
import {getMovieReleaseYear} from "../../../utilities/utilities";

export const MovieCard = memo(function MovieCard({movie, clickHandler, handleDropdownSelection}) {

    return (
        <div className={'movie-card'}>
            <OptionsSelector
                dropdownOptions={movieDropdownOptions}
                onDropdownSelection={(event) => handleDropdownSelection(event, movie)}
                controlImageSrc={'images/options-selector/threeDotsExpandOptionsIcon.png'}
                controlSource={'movie options'}
            />

            <img
                src={movie.src || '/images/movies-list/bohemianRhapsody.png'}
                alt='movie card'
                aria-label={'movie card'}
                onClick={() => clickHandler(movie)}
            />
            <div className={'movie-name-year-wrapper'}>
                <p>{movie.title}</p>
                <p className={'movie-release-year'}>{getMovieReleaseYear(movie.release_date)}</p>
            </div>
            <p className={'movie-genres'}>{movie.genres.join(', ')}</p>
        </div>
    );
})

export default MovieCard;
