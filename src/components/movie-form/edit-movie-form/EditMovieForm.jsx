import React, {useEffect} from "react";
import Dialog from "../../shared/dialog/Dialog";
import MovieForm from "../MovieForm";
import {baseMoviesPath} from "../../../data/network";
import {usePost} from "../../../hooks/network/usePost";
import {movieFormFEtoBEMapping} from "../../../utilities/utilities";
import {useLoaderData, useLocation, useNavigate} from "react-router";

export default function EditMovieForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { movie } = useLoaderData();

    const onFormPostSuccess = (responseData) => {
        if (responseData) {
            if (responseData.id) navigate(`/${responseData.id}${location.search}`);
            else navigate('/');
        }
    }
    const {postData, loading, error} = usePost(baseMoviesPath, onFormPostSuccess);


    const handleFormSubmit = async (data) => {
        await postData(movieFormFEtoBEMapping(data));
    };

    const handleDialogClose = () => {
        navigate(`/${location.search}`)
    }

    useEffect(() => {
        const tintOverlay = document.querySelector('.tint-overlay');
        if (tintOverlay) {
            tintOverlay.style.display = 'block';
        }

        return () => {
            if (tintOverlay) {
                tintOverlay.style.display = 'none';
            }
        };
    }, []);

    return (
        <Dialog
            title={'Edit Movie'}
            onClose={handleDialogClose}
        >
            <MovieForm
                onSubmit={handleFormSubmit}
                movie={movie}
            >
            </MovieForm>
            {loading && <p>Sending data...</p>}
            {error && <p>Error sending data: {error}</p>}
        </Dialog>
    )
}
