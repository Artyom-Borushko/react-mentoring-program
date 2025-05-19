import React, { memo } from 'react';
import './movieCard.css';
import OptionsSelector from '../../shared/OptionsSelector';
import { movieDropdownOptions } from '../../../data/dropdownsOptions';
import { getMovieReleaseYear } from '../../../utilities/utilities';

interface Movie {
    src?: string;
    title: string;
    release_date: string;
    genres: string[];
}

interface ClickHandler {
    (movie: Movie): void;
}
interface HandleDropdownSelection {
    (event: React.SyntheticEvent, movie: Movie): void;
}

export const MovieCard = memo(({ movie, clickHandler, handleDropdownSelection }: {
    movie: Movie,
    clickHandler: ClickHandler,
    handleDropdownSelection: HandleDropdownSelection
}) => (
  <div className="movie-card">
    <OptionsSelector
      dropdownOptions={movieDropdownOptions}
      onDropdownSelection={(event) => handleDropdownSelection(event, movie)}
      controlImageSrc="images/options-selector/threeDotsExpandOptionsIcon.png"
      controlSource="movie options"
    />

    <img
      src={movie.src || '/images/movies-list/bohemianRhapsody.png'}
      alt="movie card"
      aria-label="movie card"
      onClick={() => clickHandler(movie)}
      role="presentation"
      data-testid="movie-card"
    />
    <div className="movie-name-year-wrapper">
      <p>{movie.title}</p>
      <p className="movie-release-year">{getMovieReleaseYear(movie.release_date)}</p>
    </div>
    <p className="movie-genres">{movie.genres.join(', ')}</p>
  </div>
));

export default MovieCard;
