import React from "react";
import './movieCard.css';
import OptionsSelector from "../../shared/OptionsSelector";
import {movieDropdownOptions} from "../../../data/dropdownsOptions";

export default function MovieCard({movie, clickHandler}) {

    const handleDropdownSelection = (event) => {
        console.log('dropdown elements selected: ',
            event.target.innerText &&
            event.target.innerText.trim().toLowerCase()
        );
    };

    return (
        <div className={'movie-card'}>
            <OptionsSelector
                dropdownOptions={movieDropdownOptions}
                onDropdownSelection={handleDropdownSelection}
                controlImageSrc={'images/options-selector/threeDotsExpandOptionsIcon.png'}
                controlSource={'movie options'}
            />

            <img
                src={movie.src}
                alt='movie card'
                aria-label={'movie card'}
                onClick={() => clickHandler(movie)}
            />
            <div className={'movie-name-year-wrapper'}>
                <p>{movie.title}</p>
                <p className={'movie-release-year'}>{movie.releaseYear}</p>
            </div>
            <p className={'movie-genres'}>{movie.relevantGenres.join(', ')}</p>
        </div>
    );
}
