import React, { useState } from 'react';
import { fn } from '@storybook/test';
import SearchForm from '../components/search/SearchForm';

export default {
    component: SearchForm,
    globals: {
        backgrounds: { value: 'light', grid: false },
    },
};

const ControlledSearchFormWrapper = (args) => {
    const [value, setValue] = useState('');

    return (
        <SearchForm
            searchHandler={args.searchHandler}
            placeholder={'What do you want to watch?'}
            searchInputValue={value}
            setSearchInputValue={(newValue) => setValue(newValue)}
        >
        </SearchForm>
    );
};

export const Default = ControlledSearchFormWrapper.bind({});
Default.args = {
    searchInputValue: '',
    searchHandler: fn(),
};
