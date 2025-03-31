import {listOfGenres} from "../data/movieGenres";
import GenreSelect from "./GenreSelect";
import '../styles/main.css';
import {useState} from "react";
import MovieTile from "./MovieTile";
import {listOfMoviesMock} from "../data/moviesListMock";
import MoviesCounter from "./MoviesCounter";

export default function Main() {

    const [selectedGenre, setSelectedGenre] = useState('horror');
    const [movies, setMovies] = useState(listOfMoviesMock);

    const onSelect = (selectedGenre) => {
        console.log('the following genre is clicked: ', selectedGenre);
        setSelectedGenre(selectedGenre);
    };

    const onMovieClick = (clickedMovie) => {
        console.log('movie is clicked: ', clickedMovie);
    }

    return (
        <div className={'main-content-wrapper'}>
            <GenreSelect
                listOfGenres={listOfGenres}
                selectedGenre={selectedGenre}
                selectHandler={onSelect}
            >
            </GenreSelect>

            <MoviesCounter movies={movies}>
            </MoviesCounter>

            <MovieTile
                movies={movies}
                clickHandler={onMovieClick}>
            </MovieTile>
        </div>
    );
}
