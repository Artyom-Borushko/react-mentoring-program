import '../styles/search.css'
import {useState} from "react";

export default function SearchForm({initialSearch, searchHandler}) {

    const [inputValue, setInputValue] = useState(initialSearch);

    const submitHandler = async (event) => {
        event.preventDefault();
        searchHandler(inputValue);
    }

    const changeHandler = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <form className={'search-container'} onSubmit={submitHandler}>
            <input
                type={'text'}
                className={'search-input'}
                placeholder={'What do you want to watch?'}
                value={inputValue}
                onChange={changeHandler}
            />

            <button
                type={'submit'}
                className={'search-submit-button'}
            >
                Search
            </button>
    </form>
    );
}
