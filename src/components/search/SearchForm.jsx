import React from "react";
import './searchForm.css'
import {useState} from "react";
import Button from "../shared/button/Button";

export default function SearchForm({searchHandler, placeholder}) {

    const [inputValue, setInputValue] = useState('');

    const submitHandler = (event) => {
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
                placeholder={placeholder}
                value={inputValue}
                onChange={changeHandler}
            />

            <Button type={'submit'}>
                Search
            </Button>
    </form>
    );
}
