import React from 'react';
import {
  Outlet, useLocation, useNavigate, useOutletContext,
} from 'react-router';
import SearchForm from '../search/SearchForm';
import './header.css';
import Button from '../shared/button/Button';

export default function Header() {
  const { onMovieSearch, searchInputValue, setSearchInputValue } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">

      <div className="header-title-wrapper">
        <p className="header-title">
          netflix
          <span>roulette</span>
        </p>
        <Button
          type="button"
          classNames="header-title add-movie-button"
          onClick={() => navigate(`/new${location.search}`)}
        >
          <span>+ Add Movie</span>
        </Button>
      </div>

      <div>
        <h1 className="header-header">Find your movie</h1>
        <SearchForm
          searchHandler={onMovieSearch}
          placeholder="What do you want to watch?"
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      </div>

      <Outlet />
    </div>
  );
}
