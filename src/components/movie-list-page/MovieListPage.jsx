import React, {useState} from "react";
import './movieListPage.css';
import Header from "../header/Header";
import MovieDetails from "../movie-details/MovieDetails";
import MovieDetailsHeader from "../movie-details/header/MovieDetailsHeader";
import MoviesSort from "../movie-tile-sort/MoviesSort";
import {moviesSort} from "../../utilities/sort";
import {listOfMoviesMock} from "../../data/moviesListMock";
import MoviesCounter from "../movie-tile/MoviesCounter";

const MovieTile = React.lazy(
    () => import('../movie-tile/MovieTile')
);

export default function MovieListPage() {

    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedSortOption, setSelectedSortOption] = useState('Select sorting');
    const [selectedGenre, setSelectedGenre] = useState('horror');
    const [movies, setMovies] = useState(listOfMoviesMock);
    const [movieSelected, setMovieSelected] = useState(undefined);

    const onMovieSearch = () => {
        console.log('search happened with: ', searchInputValue);
    }

    const onMovieSelect = (selectedMovie) => {
        setMovieSelected(selectedMovie);
    }

    const handleSearchAll = () => {
        setMovieSelected(undefined);
    }

    const genreSelectHandler = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
    };

    const sortControlHandler = (event) => {
        setSelectedSortOption(event.target.innerText.trim().toLowerCase());
        const sortedMovies = moviesSort(movies, event.target.innerText);
        setMovies(sortedMovies);
    };

    return (
        <>
            {!movieSelected && <Header
                onMovieSearch={onMovieSearch}
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
            >
            </Header>}
            {movieSelected && (
                <>
                    <MovieDetailsHeader
                        searchAllHandler={handleSearchAll}>
                    </MovieDetailsHeader>
                    <MovieDetails
                        movie={movieSelected}>
                    </MovieDetails>
                </>
            )}

            <div className={'header-from-main-divider'}></div>

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
        </>
    )
}
