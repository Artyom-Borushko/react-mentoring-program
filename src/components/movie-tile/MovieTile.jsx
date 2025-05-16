import React from "react";
import MovieCard from "./movie-card/MovieCard";
import './movieTile.css';

export default function MovieTile({movies, clickHandler, handleDropdownSelection}) {

    return (
        <div className={'movie-tile'}>
            {movies.map((movie) => (
                <MovieCard
                    clickHandler={clickHandler}
                    handleDropdownSelection={handleDropdownSelection}
                    movie={movie}
                    key={movie.id}
                />
            ))}
        </div>
    );
}
