import React from 'react';
import './searchForm.css';
import Button from '../shared/button/Button';

export default function SearchForm({
  searchHandler, placeholder, searchInputValue, setSearchInputValue,
}) {
  const submitHandler = (event) => {
    event.preventDefault();
    searchHandler();
  };

  return (
    <form className="search-container" onSubmit={submitHandler}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />

      <Button type="submit">
        Search
      </Button>
    </form>
  );
}
