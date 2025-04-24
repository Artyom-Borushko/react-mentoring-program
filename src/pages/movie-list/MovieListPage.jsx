import React, {useCallback, useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import './movieListPage.css';
import Header from "../../components/header/Header";
import MovieDetails from "../../components/movie-details/MovieDetails";
import MovieDetailsHeader from "../../components/movie-details/header/MovieDetailsHeader";
import MoviesSort from "../../components/movie-tile-sort/MoviesSort";
import MoviesCounter from "../../components/movie-tile/MoviesCounter";
import {
    BEtoFEMapMoviesSortingOptions,
    mapMoviesSortingOptions,
} from "../../utilities/utilities";
import {useFetch} from "../../hooks/network/useFetch";

const MovieTile = React.lazy(
    () => import('../../components/movie-tile/MovieTile')
);

export default function MovieListPage() {

    let [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const genreFilterQuery = searchParams.get("filter") || "all";
    const sortByQuery = searchParams.get("sortBy") || "Select sorting";

    const [selectedGenre, setSelectedGenre] = useState(genreFilterQuery);
    const [searchInputValue, setSearchInputValue] = useState(searchQuery);
    const [selectedSortOption, setSelectedSortOption] = useState(BEtoFEMapMoviesSortingOptions(sortByQuery));
    const [movies, setMovies] = useState([]);
    const [movieSelected, setMovieSelected] = useState(undefined);
    const topRef = useRef(null);

    const requestUrl = (() => {
        const params = new URLSearchParams(searchParams);
        return `http://localhost:4000/movies?limit=10&${params.toString()}`;
    })();
    const { fetchedMovies, loading, error } = useFetch(requestUrl);

    useEffect(() => {
        if (fetchedMovies) {
            setMovies(fetchedMovies);
        }
    }, [fetchedMovies]);

    const onMovieSearch = () => {
        const params = new URLSearchParams(searchParams);
        if (searchInputValue) {
            params.set("search", searchInputValue);
            params.set("searchBy", 'title');
        } else {
            params.delete("search");
            params.delete("searchBy");
        }
        setSearchParams(params);
    };

    const onMovieSelect = useCallback((selectedMovie) => {
        topRef.current.scrollIntoView({ behavior: 'smooth' })
        setMovieSelected(selectedMovie);
    }, []);

    const handleSearchAll = () => {
        setMovieSelected(undefined);
    }

    const genreSelectHandler = (selectedGenre) => {
        const params = new URLSearchParams(searchParams);
        if (selectedGenre && selectedGenre === 'all') {
            params.delete("filter");
        } else if (selectedGenre) {
            params.set("filter", selectedGenre);
        } else {
            params.delete("filter");
        }
        setSearchParams(params);
        setSelectedGenre(selectedGenre);
    };

    const sortControlHandler = (event) => {
        setSelectedSortOption(event.target.innerText.trim().toLowerCase());
        const BESortingFieldName = mapMoviesSortingOptions(event.target.innerText.trim().toLowerCase());

        const params = new URLSearchParams(searchParams);
        if (BESortingFieldName) {
            params.set("sortBy", BESortingFieldName);
            params.set("sortOrder", 'desc');
        } else {
            params.delete("sortBy");
            params.delete("sortOrder");
        }
        setSearchParams(params);
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
