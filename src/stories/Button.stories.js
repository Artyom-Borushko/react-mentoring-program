import { fn } from '@storybook/test';
import Button from '../components/shared/button/Button';

export default {
  component: Button,
};

export const SubmitButton = {
  args: {
    type: 'submit',
    children: 'button text',
    onClick: fn(),
  },
};

export const DropdownOpenerButton = {
  args: {
    type: 'dropdown-opener',
    children: 'button text',
    onClick: fn(),
  },
};
