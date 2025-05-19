export function mapMoviesSortingOptions(FESortingOption) {
  const frontEntToBackEndSortingMap = {
    'release date': 'release_date',
    title: 'title',
  };
  return frontEntToBackEndSortingMap[FESortingOption] || '';
}

export function BEtoFEMapMoviesSortingOptions(BESortingOption) {
  const backEndToFrontEndSortingMap = {
    release_date: 'release date',
    title: 'title',
  };
  return backEndToFrontEndSortingMap[BESortingOption] || BESortingOption;
}

export function getMovieRuntime(totalMinutes) {
  if (!totalMinutes) return 'N/A';
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}min`;
}

export function getMovieReleaseYear(releaseDate) {
  if (releaseDate) return releaseDate.split('-')[0];
  return '';
}

const movieFormFEtoBEMappingObject = {
  movieTitle: 'title',
  movieReleaseDate: 'release_date',
  movieUrl: 'poster_path',
  movieRating: 'vote_average',
  movieGenres: 'genres',
  movieRuntime: 'runtime',
  movieOverview: 'overview',
};

export function movieFormFEtoBEMapping(feMovieFormData) {
  const feMovieFormDataTypeNormalized = {
    ...feMovieFormData,
    movieRuntime: Number(feMovieFormData.movieRuntime),
    movieRating: Number(feMovieFormData.movieRating),
  };
  const result = {};
  Object.keys(feMovieFormDataTypeNormalized).forEach((movieField) => {
    result[movieFormFEtoBEMappingObject[movieField]] = feMovieFormDataTypeNormalized[movieField];
  });
  return result;
}
