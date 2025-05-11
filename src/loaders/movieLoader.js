import {baseMoviesPath} from "../data/newtwork";

export async function movieDetailsLoader({ params }) {
    const requestUrl = `${baseMoviesPath}/${params.movieId}`;
    try {
        const response = await fetch(requestUrl);
        const movie = await response.json();
        return { movie };
    } catch (err) {
        console.error('Error fetching Movie details', err.message);
        return {};
    }
}
