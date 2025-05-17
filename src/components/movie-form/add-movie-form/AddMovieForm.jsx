import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Dialog from '../../shared/dialog/Dialog';
import MovieForm from '../MovieForm';
import baseMoviesPath from '../../../data/network';
import usePost from '../../../hooks/network/usePost';
import { movieFormFEtoBEMapping } from '../../../utilities/utilities';

export default function AddMovieForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const onFormPostSuccess = (responseData) => {
    if (responseData) {
      if (responseData.id) navigate(`/${responseData.id}${location.search}`);
      else navigate('/');
    }
  };
  const { postData, loading, error } = usePost(baseMoviesPath, onFormPostSuccess);

  const handleFormSubmit = async (data) => {
    await postData(movieFormFEtoBEMapping(data));
  };

  const handleDialogClose = () => {
    navigate(`/${location.search}`);
  };

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
      title="Add Movie"
      onClose={handleDialogClose}
    >
      <MovieForm
        onSubmit={handleFormSubmit}
      />
      {loading && <p>Sending data...</p>}
      {error && (
        <p>
          Error sending data:
          {error}
        </p>
      )}
    </Dialog>
  );
}
