import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header/Header";
import MovieDetails, {movieDetailsLoader} from "./components/movie-details/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <p>Route Not Found</p>,
        children: [
            {
                path: "/",
                element: <Header />,
            },
            {
                path: "/:movieId",
                element: <MovieDetails />,
                loader: movieDetailsLoader,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
