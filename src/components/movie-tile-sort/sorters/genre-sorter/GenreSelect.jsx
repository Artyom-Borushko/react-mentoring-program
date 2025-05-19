import React from 'react';
import './genreSelect.css';

export default function GenreSelect({ selectedGenre, listOfGenres, genreSelectHandler }) {
  const clickHandler = (event) => {
    event.preventDefault();
    genreSelectHandler(event.target.name);
  };

  return (
    <div className="genre-selection-wrapper">
      {listOfGenres.map((genre, index) => (
        <button
          type="button"
          className={`genre-button ${selectedGenre === genre ? 'selected' : ''}`}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          name={genre}
          onClick={clickHandler}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
