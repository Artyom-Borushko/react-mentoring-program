import '../styles/main.css';
import React, {useState} from "react";
import {listOfMoviesMock} from "../data/moviesListMock";
import MoviesCounter from "./movie-tile/MoviesCounter";
import MoviesSort from "./movie-tile-sort/MoviesSort";
import {moviesSort} from "../utilities/sort";

const MovieTile = React.lazy(
    () => import('./movie-tile/MovieTile')
);

export default function Main({onMovieSelect}) {

    const [selectedGenre, setSelectedGenre] = useState('horror');
    const [selectedSortOption, setSelectedSortOption] = useState('Select sorting');
    const [movies, setMovies] = useState(listOfMoviesMock);

    const genreSelectHandler = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
    };

    const sortControlHandler = (event) => {
        setSelectedSortOption(event.target.innerText.trim().toLowerCase());
        const sortedMovies = moviesSort(movies, event.target.innerText);
        setMovies(sortedMovies);
    };

    return (
        <div className={'main-content-wrapper'}>
            <MoviesSort
                selectedGenre={selectedGenre}
                genreSelectHandler={genreSelectHandler}
                selectedSortOption={selectedSortOption}
                sortControlHandler={sortControlHandler}
            >
            </MoviesSort>

            <MoviesCounter movies={movies}>
            </MoviesCounter>

            <React.Suspense fallback={<h3>Loading movies... Please wait</h3>}>
                <MovieTile
                    movies={movies}
                    clickHandler={onMovieSelect}>
                </MovieTile>
            </React.Suspense>
        </div>
    );
}
