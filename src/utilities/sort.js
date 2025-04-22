
const sortingTextToMoviesMapping = {
    'release date': 'releaseYear',
    'title': 'title',
};

function sortByProperty(array, property, order = 'asc') {
    return array.sort((a, b) => {
        if (a[property] === undefined || b[property] === undefined) {
            console.error(`Error sorting. "${property}" does not exist on one or more objects`);
        }

        let valueA = a[property];
        let valueB = b[property];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return order === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        return order === 'asc'
            ? (valueA > valueB ? 1 : valueA < valueB ? -1 : 0)
            : (valueA < valueB ? 1 : valueA > valueB ? -1 : 0);
    });
}

export function moviesSort(array, sortingText, order = 'asc') {
    const movieProperty = sortingTextToMoviesMapping[sortingText.trim().toLowerCase()]
    return sortByProperty(array, movieProperty, order);
}
