import { fn } from '@storybook/test';
import MovieCard from '../components/MovieCard';

export default {
    component: MovieCard,
};

export const WithClickableImage = {
    args: {
        title: 'Kill Bill: Vol 2',
        releaseYear: '1994',
        relevantGenres: ['comedy', 'crime', 'oscar'],
        src: '/images/movies-list/killBillVol2.png',
        clickHandler: fn()
    }
};
