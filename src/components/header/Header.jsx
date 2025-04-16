import React from "react";
import SearchForm from "../search/SearchForm";
import './header.css';

export default function Header() {

    const onSearch = (searchString) => {
        console.log('search happened with searchString: ', searchString);
    }

    return (
        <div className={'header'}>

            <div className={'header-title-wrapper'}>
                <p className={'header-title'}>netflix<span>roulette</span></p>
            </div>

            <div>
                <h1 className={'header-header'}>Find your movie</h1>
                <SearchForm
                    initialSearch={'movie1'}
                    searchHandler={onSearch}>
                </SearchForm>
            </div>

        </div>
    );
}
