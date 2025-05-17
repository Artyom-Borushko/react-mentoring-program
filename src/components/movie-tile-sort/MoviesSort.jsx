import React from 'react';
import './moviesSort.css';
import GenreSelect from './sorters/genre-sorter/GenreSelect';
import { listOfGenres } from '../../data/movieGenres';
import SortControl from './sorters/options-sorter/SortControl';

export default function MoviesSort({
  selectedGenre, genreSelectHandler, selectedSortOption, sortControlHandler,
}) {
  return (
    <div className="movies-sort-wrapper">
      <GenreSelect
        listOfGenres={listOfGenres}
        selectedGenre={selectedGenre}
        genreSelectHandler={genreSelectHandler}
      />

      <SortControl
        selectedSortOption={selectedSortOption}
        sortControlHandler={sortControlHandler}
      />
    </div>
  );
}
