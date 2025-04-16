import './App.css';
import {Counter} from "./components/Counter";
import Header from "./components/header/Header";
import './components/header/header.css';
import Main from "./components/Main";
import {useState} from "react";
import MovieDetails from "./components/movie-details/MovieDetails";
import MovieDetailsHeader from "./components/movie-details/header/MovieDetailsHeader";

function App() {

    const [movieSelected, setMovieSelected] = useState(undefined);

    const onMovieSelect = (selectedMovie) => {
        setMovieSelected(selectedMovie);
    }

    const handleSearchAll = () => {
        setMovieSelected(undefined);
    }

    return (
        <div className={'app'}>
            <Counter initialCounter={123}></Counter>

            {!movieSelected && <Header></Header>}
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
            <Main onMovieSelect={onMovieSelect}></Main>
        </div>
    );
}

export default App;
