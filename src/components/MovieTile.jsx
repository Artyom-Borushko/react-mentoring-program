import MovieCard from "./MovieCard";
import '../styles/movieTile.css';

export default function MovieTile({movies, clickHandler}) {

    return (
        <div className={'movie-tile'}>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    releaseYear={movie.releaseYear}
                    relevantGenres={movie.relevantGenres}
                    src={movie.src}
                    clickHandler={clickHandler}
                    key={movie.id}
                />
            ))}
        </div>
    );
}
