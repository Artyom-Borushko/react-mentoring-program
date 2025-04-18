
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

export function searchSubstring(data, searchSubstring, searchIn = 'title') {
    if (!searchSubstring) return data;
    const searchResult = [];
    data.forEach(searchableObject => {
        if (searchableObject[searchIn].trim().toLowerCase()
                .includes(searchSubstring.trim().toLowerCase())
        ) {
            searchResult.push(searchableObject);
        }
    });
    return searchResult;
}

export function filter(data, filterCriteria, filterIn = 'relevantGenres') {
    if (!filterCriteria || filterCriteria === 'all') return data;
    const filterResult = [];
    data.forEach(filterableObject => {
        if (filterableObject[filterIn].includes(filterCriteria.trim().toLowerCase())
        ) {
            filterResult.push(filterableObject);
        }
    });
    return filterResult;
}
