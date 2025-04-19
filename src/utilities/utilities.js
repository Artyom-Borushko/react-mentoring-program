
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
