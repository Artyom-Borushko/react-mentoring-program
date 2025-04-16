import { fn } from '@storybook/test';
import SearchForm from '../components/search/SearchForm';

export default {
    component: SearchForm,
    globals: {
        backgrounds: { value: 'light', grid: false },
    },
};

export const InitialSearch = {
    args: {
        initialSearch: 'test initial search',
        searchHandler: fn()
    }
};
