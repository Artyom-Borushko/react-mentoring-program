import './movieForm.css';
import React, { useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import Button from '../shared/button/Button';
import TextInput from '../shared/input/text-input/TextInput';
import Checkbox from '../shared/input/checkbox/Checkbox';
import TextArea from '../shared/input/text-area/TextArea';
import { movieGenres } from '../../data/movieGenres';
import formValidationSchema from '../../schemas/formValidationSchema';

export default function MovieForm({ onSubmit, movie }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Formik
      className="movie-form"
      initialValues={{
        movieTitle: (movie && movie.title) || '',
        movieReleaseDate: (movie && movie.release_date) || '',
        movieUrl: (movie && movie.poster_path) || '',
        movieRating: (movie && movie.vote_average) || '',
        movieGenres: (movie && movie.genres) || [],
        movieRuntime: (movie && movie.runtime) || '',
        movieOverview: (movie && movie.overview) || '',
      }}
      validationSchema={formValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form
          className="movie-form"
        >
          <div className="movie-form-content">
            <TextInput
              label="Title"
              name="movieTitle"
              type="text"
              id="movieTitle"
              placeholder="Title"
            />
            <TextInput
              label="Release date"
              name="movieReleaseDate"
              type="date"
              id="movieReleaseDate"
            />
            <TextInput
              label="Movie URL"
              name="movieUrl"
              type="text"
              id="movieUrl"
              placeholder="https://"
            />
            <TextInput
              label="Rating"
              name="movieRating"
              type="text"
              id="movieRating"
              placeholder="7.8"
            />
            <div className="input-wrapper">
              <button
                type="button"
                className="dropdown-opener"
                onClick={toggleDropdown}
              >
                Select Genres
              </button>
              {showDropdown && (
              <div className="dropdown-content">
                {movieGenres.map((genre) => (
                  <Checkbox
                    key={genre}
                    name="movieGenres"
                    id="movieGenres"
                    value={genre}
                    label={genre}
                  />
                ))}
              </div>
              )}
              <ErrorMessage name="movieGenres">
                {(msg) => <div className="form-field-validation-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <TextInput
              label="Runtime"
              name="movieRuntime"
              type="text"
              id="movieRuntime"
              placeholder="minutes"
            />
            <TextArea
              label="Overview"
              name="movieOverview"
              id="movieOverview"
              placeholder="Movie description"
            />
          </div>

          <div className="movie-form-confirmation-control">
            <Button
              type="reset"
              disabled={isSubmitting}
              onClick={() => resetForm()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
