import { fn } from '@storybook/test';
import OptionsSelector from '../components/shared/OptionsSelector';
import { movieDropdownOptions, moviesSortDropdownOptions } from '../data/dropdownsOptions';

export default {
  component: OptionsSelector,
};

export const ThreeDotsSelector = {
  args: {
    dropdownOptions: movieDropdownOptions,
    controlImageSrc: 'images/options-selector/threeDotsExpandOptionsIcon.png',
    onDropdownSelection: fn(),
  },
};

export const TriangleDownSelector = {
  args: {
    dropdownOptions: moviesSortDropdownOptions,
    controlImageSrc: 'images/icons/redTriangleDown.png',
    onDropdownSelection: fn(),
  },
};
