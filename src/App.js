import React from "react";
import './App.css';
import {Counter} from "./components/Counter";
import './components/header/header.css';
import MovieListPage from "./pages/movie-list/MovieListPage";

function App() {

    return (
        <div className={'app'}>
            <Counter initialCounter={123}></Counter>
            <MovieListPage></MovieListPage>
        </div>
    );
}

export default App;
