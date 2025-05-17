import React from 'react';
import './moviesCounter.css';

export default function MoviesCounter({ movies }) {
  return (
    <p className="movies-counter">
      <span>{movies.length || 0}</span>
      {' '}
      movies found
    </p>
  );
}
