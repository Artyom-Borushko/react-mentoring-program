import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import MovieDetails from './components/movie-details/MovieDetails';
import AddMovieForm from './components/movie-form/add-movie-form/AddMovieForm';
import movieDetailsLoader from './loaders/movieLoader';
import EditMovieForm from './components/movie-form/edit-movie-form/EditMovieForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Route Not Found</p>,
    children: [
      {
        path: '/',
        element: <Header />,
        children: [
          {
            path: '/new',
            element: <AddMovieForm />,
          },
          {
            path: '/:movieId/edit',
            element: <EditMovieForm />,
            loader: movieDetailsLoader,
          },
        ],
      },
      {
        path: '/:movieId',
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
