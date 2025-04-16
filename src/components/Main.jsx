import '../styles/main.css';
import {useState} from "react";
import MovieTile from "./movie-tile/MovieTile";
import {listOfMoviesMock} from "../data/moviesListMock";
import MoviesCounter from "./movie-tile/MoviesCounter";
import MoviesSort from "./movie-tile-sort/MoviesSort";
import {moviesSort} from "../utilities/sort";

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

            <MovieTile
                movies={movies}
                clickHandler={onMovieSelect}>
            </MovieTile>
        </div>
    );
}
