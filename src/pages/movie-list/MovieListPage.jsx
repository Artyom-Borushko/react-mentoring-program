import React, {useCallback, useEffect, useRef, useState} from "react";
import './movieListPage.css';
import Header from "../../components/header/Header";
import MovieDetails from "../../components/movie-details/MovieDetails";
import MovieDetailsHeader from "../../components/movie-details/header/MovieDetailsHeader";
import MoviesSort from "../../components/movie-tile-sort/MoviesSort";
import MoviesCounter from "../../components/movie-tile/MoviesCounter";
import {
    buildRequestURL,
    mapMoviesSortingOptions,
} from "../../utilities/utilities";
import {useFetch} from "../../hooks/network/useFetch";

const MovieTile = React.lazy(
    () => import('../../components/movie-tile/MovieTile')
);

export default function MovieListPage() {

    const baseMoviesUrl = 'http://localhost:4000/movies?limit=10';
    const [moviesUrl, setMoviesUrl] = useState(baseMoviesUrl);
    const { fetchedMovies, loading, error } = useFetch(moviesUrl);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedSortOption, setSelectedSortOption] = useState('Select sorting');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [movies, setMovies] = useState([]);
    const [movieSelected, setMovieSelected] = useState(undefined);
    const topRef = useRef(null);

    useEffect(() => {
        if (fetchedMovies) {
            setMovies(fetchedMovies);
        }
    }, [fetchedMovies]);

    const onMovieSearch = () => {
        setMoviesUrl((prevMovieUrl) => {
            return buildRequestURL(prevMovieUrl, {
                searchBy: 'title',
                search: `${searchInputValue}`
            })
        });
    };

    const onMovieSelect = useCallback((selectedMovie) => {
        topRef.current.scrollIntoView({ behavior: 'smooth' })
        setMovieSelected(selectedMovie);
    }, []);

    const handleSearchAll = () => {
        setMovieSelected(undefined);
    }

    const genreSelectHandler = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
        if (selectedGenre === 'all') {
            setMoviesUrl((prevMovieUrl) => {
                return buildRequestURL(prevMovieUrl, {}, ['filter']);
            });
        } else {
            setMoviesUrl((prevMovieUrl) => {
                return buildRequestURL(prevMovieUrl, {
                    filter: `${selectedGenre}`
                });
            });
        }
    };

    const sortControlHandler = (event) => {
        setSelectedSortOption(event.target.innerText.trim().toLowerCase());
        const BESortingFieldName = mapMoviesSortingOptions(event.target.innerText.trim().toLowerCase());
        setMoviesUrl((prevMovieUrl) => {
            return buildRequestURL(prevMovieUrl, {
                sortBy: `${BESortingFieldName}`,
                sortOrder: 'desc'
            });
        });
    };

    return (
        <>
            <div className={'general-header'} ref={topRef}>
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
            </div>

            <div className={'header-from-main-divider'}></div>

            {error
                ? <p>Error: {error}</p>
                :
                <div className={'main-content-wrapper'}>
                    <MoviesSort
                        selectedGenre={selectedGenre}
                        genreSelectHandler={genreSelectHandler}
                        selectedSortOption={selectedSortOption}
                        sortControlHandler={sortControlHandler}
                    >
                    </MoviesSort>

                    {!loading &&
                        <MoviesCounter movies={movies}>
                        </MoviesCounter>
                    }

                    <React.Suspense fallback={<h3>Loading movies... Please wait</h3>}>
                        <MovieTile
                            movies={movies}
                            clickHandler={onMovieSelect}>
                        </MovieTile>
                    </React.Suspense>
                </div>
            }
        </>
    )
}
