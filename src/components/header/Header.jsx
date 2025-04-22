import React from "react";
import SearchForm from "../search/SearchForm";
import './header.css';

export default function Header({onMovieSearch, searchInputValue, setSearchInputValue}) {

    return (
        <div className={'header'}>

            <div className={'header-title-wrapper'}>
                <p className={'header-title'}>netflix<span>roulette</span></p>
            </div>

            <div>
                <h1 className={'header-header'}>Find your movie</h1>
                <SearchForm
                    searchHandler={onMovieSearch}
                    placeholder={'What do you want to watch?'}
                    searchInputValue={searchInputValue}
                    setSearchInputValue={setSearchInputValue}
                >
                </SearchForm>
            </div>

        </div>
    );
}
