import MovieCard from "./MovieCard";
import '../styles/movieTile.css';

export default function MovieTile({movies, clickHandler}) {

    return (
        <div className={'movie-tile'}>
            {movies.map((movie) => (
                <MovieCard
                    clickHandler={clickHandler}
                    movie={movie}
                    key={movie.id}
                />
            ))}
        </div>
    );
}
