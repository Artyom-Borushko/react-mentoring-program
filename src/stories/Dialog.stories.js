import { fn } from '@storybook/test';
import Dialog from "../components/shared/dialog/Dialog";
import MovieForm from "../components/movie-form/MovieForm";
import {listOfMoviesMock} from "../data/moviesListMock";
import Button from "../components/shared/button/Button";
import React from "react";

export default {
    component: Dialog,
};

export const AddEmptyMovie = {
    args: {
        title: 'Add Movie',
        children: <MovieForm/>,
        onClose: fn()
    }
};

export const EditPredefinedMovie = {
    args: {
        title: 'Edit Movie',
        children: <MovieForm initialMovie={listOfMoviesMock[4]} onSubmit={fn()}/>,
        onClose: fn()
    }
};

export const DeleteMovie = {
    args: {
        title: 'Delete Movie',
        children: (
            <>
                <p
                    className={'delete-movie-confirmation-text'}
                >
                    Are you sure you want to delete this movie?
                </p>
                <div className={'movie-form-confirmation-control'}>
                    <Button
                        type={'submit'}
                        onClick={fn()}
                    >
                        Confirm
                    </Button>
                </div>
            </>
        ),
        onClose: fn()
    }
};
