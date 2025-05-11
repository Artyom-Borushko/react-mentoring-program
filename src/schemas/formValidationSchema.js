
import * as Yup from "yup";

export const formValidationSchema = Yup.object({
    movieTitle: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Movie Title is required'),
    movieReleaseDate: Yup.date()
        .max(new Date(new Date().setFullYear(new Date().getFullYear() + 2)), 'Release date cannot be more than 2 years from today')
        .required('Movie Release date is required'),
    movieUrl: Yup.string()
        .url('Invalid URL format')
        .required('Movie URL is required'),
    movieRating: Yup.number()
        .min(0, 'Rating must be between 0 and 10')
        .max(10, 'Rating must be between 0 and 10'),
    movieGenres: Yup.array()
        .min(1, 'At least one genre is required')
        .of(Yup.string()),
    movieRuntime: Yup.number()
        .max(1000, 'Runtime cannot exceed 1000 minutes')
        .required('Movie runtime is required'),
    movieOverview: Yup.string()
        .max(6000, 'Maximum movie description is 6000 symbols')
        .required('Movie description is required'),
})
