import React from "react";
import './movieDetails.css';

export default function MovieDetails({movie}) {

    return (
        <div className={'movie-details'}>
            <img
                src={movie.src}
                alt='movie details'
                className={'movie-details-image'}
                aria-label={'movie details'}
            />

             <div className={'movie-details-information'}>
                 <div className={'movie-details-title-rating'}>
                     <p className={'movie-details-title'}>{movie.title}</p>
                     <p className={'movie-details-rating'}>{movie.rating}</p>
                 </div>
                 <p className={'movie-details-genres'}>{movie.relevantGenres.join(', ')}</p>

                 <div className={'movie-details-year-duration'}>
                     <span className={'movie-details-year'}>
                         {movie.releaseYear}
                     </span>
                     <span className={'movie-details-duration'}>
                         {movie.duration}
                     </span>
                 </div>

                 <p className={'movie-details-description'}>
                     {movie.description}
                 </p>
             </div>
        </div>
    );
}
