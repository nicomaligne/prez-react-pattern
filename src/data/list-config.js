import { action } from '@storybook/addon-actions';

export const headers = [
  { key: 'image', label: 'Image', type: 'image' },
  { key: 'id', label: 'ID', type: 'id' },
  { key: 'name', label: 'Name', type: 'main' },
  { key: 'types', label: 'Types', type: 'list' },
  { key: 'abilities', label: 'Abilities', type: 'list' },
  { key: 'height', label: 'Height', type: 'number' },
  { key: 'weight', label: 'Weight', type: 'number' }
];

export const actions = [
  {
    id: 'add',
    label: 'Add',
    onClick: action('Add clicked'),
    className: 'btn'
  },
  {
    id: 'options',
    label: 'Options',
    onClick: action('Options clicked'),
    className: 'btn'
  }
];
