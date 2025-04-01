import {listOfGenres} from "../data/movieGenres";
import GenreSelect from "./GenreSelect";
import '../styles/main.css';
import {useState} from "react";
import MovieTile from "./MovieTile";
import {listOfMoviesMock} from "../data/moviesListMock";
import MoviesCounter from "./MoviesCounter";

export default function Main({onMovieSelect}) {

    const [selectedGenre, setSelectedGenre] = useState('horror');
    const [movies, setMovies] = useState(listOfMoviesMock);

    const onSelect = (selectedGenre) => {
        console.log('the following genre is clicked: ', selectedGenre);
        setSelectedGenre(selectedGenre);
    };

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
                clickHandler={onMovieSelect}>
            </MovieTile>
        </div>
    );
}
