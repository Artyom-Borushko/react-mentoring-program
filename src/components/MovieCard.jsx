import '../styles/movieCard.css';
import OptionsSelector from "./OptionsSelector";
import {movieDropdownOptions} from "../data/dropdownsOptions";

export default function MovieCard({title, releaseYear, relevantGenres, clickHandler, src}) {

    const handleDropdownSelection = (event) => {
        console.log('dropdown elements selected: ',
            event.target.innerText &&
            event.target.innerText.trim().toLowerCase()
        );
    };

    return (
        <div className={'movie-card'}>
            <OptionsSelector
                movieDropdownOptions={movieDropdownOptions}
                onDropdownSelection={handleDropdownSelection}
            />

            <img
                src={src}
                alt='movie card'
                aria-label={'movie card'}
                onClick={clickHandler}
            />
            <div className={'movie-name-year-wrapper'}>
                <p>{title}</p>
                <p className={'movie-release-year'}>{releaseYear}</p>
            </div>
            <p className={'movie-genres'}>{relevantGenres.join(', ')}</p>
        </div>
    );
}
