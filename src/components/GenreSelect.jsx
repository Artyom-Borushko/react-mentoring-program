import '../styles/genreSelect.css'

export default function GenreSelect({selectedGenre, listOfGenres, selectHandler}) {

    const clickHandler = (event) => {
        event.preventDefault();
        selectHandler(event.target.name);
    }

    return (
        <div className={'genre-selection-wrapper'}>
            {listOfGenres.map((genre, index) => {
                return (
                    <button
                        className={`genre-button ${selectedGenre === genre ? "selected" : ""}`}
                        key={index}
                        name={genre}
                        onClick={clickHandler}
                    >
                        {genre}
                    </button>
                )
            })}
        </div>
    );
}
