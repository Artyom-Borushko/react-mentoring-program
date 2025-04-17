import React from "react";
import './App.css';
import {Counter} from "./components/Counter";
import './components/header/header.css';
import MovieListPage from "./components/movie-list-page/MovieListPage";

function App() {

    return (
        <div className={'app'}>
            <Counter initialCounter={123}></Counter>
            <MovieListPage></MovieListPage>
        </div>
    );
}

export default App;
