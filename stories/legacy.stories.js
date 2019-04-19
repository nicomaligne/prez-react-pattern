import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import pokemons from './pokemons';
import List from '../src/common/List.component';

const headers = [
  { key: 'image', label: 'Image', type: 'image' },
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', type: 'main' },
  { key: 'height', label: 'Height' },
  { key: 'weight', label: 'Weight' },
  { key: 'types', label: 'Types' },
  { key: 'abilities', label: 'Abilities' },
];

storiesOf('Legacy', module)
  .add('List', () => <List title="datasets" headers={headers} collection={pokemons} />)
  .add('Step 1', () => <div>TODO</div>);
