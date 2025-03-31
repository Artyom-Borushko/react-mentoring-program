import { fn } from '@storybook/test';
import OptionsSelector from '../components/OptionsSelector';
import {movieDropdownOptions} from "../data/dropdownsOptions";

export default {
    component: OptionsSelector,
};

export const ClickableSelection = {
    args: {
        movieDropdownOptions: movieDropdownOptions,
        onDropdownSelection: fn()
    }
};
