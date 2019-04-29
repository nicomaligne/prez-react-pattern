import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Step1 from '../src/steps_legacy/step1/story';
import Step2 from '../src/steps_legacy/step2/story';
import Step3 from '../src/steps_legacy/step3/story';

const headers = [
  { key: 'image', label: 'Image', type: 'image' },
  { key: 'id', label: 'ID', type: 'id' },
  { key: 'name', label: 'Name', type: 'main' },
  { key: 'types', label: 'Types', type: 'list' },
  { key: 'abilities', label: 'Abilities', type: 'list' },
  { key: 'height', label: 'Height', type: 'number' },
  { key: 'weight', label: 'Weight', type: 'number' }
];

const actions = [
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

storiesOf('Legacy', module)
  .add('Step 1', () => <Step1 />)
  .add('Step 2', () => <Step2 />)
  .add('Step 3', () => <Step3 />);
