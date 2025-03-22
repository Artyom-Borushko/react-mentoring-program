import {listOfGenres} from "../data/movieGenres";
import GenreSelect from "./GenreSelect";
import '../styles/main.css';
import {useState} from "react";

export default function Main() {

    const [selectedGenre, setSelectedGenre] = useState('horror');

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
        </div>
    );
}
