import { fn } from '@storybook/test';
import SortControl from '../components/movie-tile-sort/sorters/options-sorter/SortControl';

export default {
  component: SortControl,
};

export const Default = {
  args: {
    selectedSortOption: 'test option selection',
    sortControlHandler: fn(),
  },
};
