
export function getFormDataObject(event) {
    // extra logic here to handle collection of multiple selected checkboxes
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        if (formObject[key]) {
            formObject[key] = Array.isArray(formObject[key])
                ? [...formObject[key], value]
                : [formObject[key], value];
        } else {
            formObject[key] = value;
        }
    });
    return formObject;
}

export function mapMoviesSortingOptions(FESortingOption) {
    const frontEntToBackEndSortingMap = {
        'release date': 'release_date',
        'title': 'title',
    }
    return frontEntToBackEndSortingMap[FESortingOption] || '';
}

export function buildRequestURL(baseURL, params = {}, removeParams = []) {
    const url = new URL(baseURL);

    removeParams.forEach((param) => {
        if (url.searchParams.has(param)) {
            url.searchParams.delete(param);
        }
    });

    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, value);
        }
    }

    return url.toString();
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
