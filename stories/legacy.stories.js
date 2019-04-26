import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import pokemons from './pokemons';
import List from '../src/common/List.component';
import Step1ComplexList from '../src/steps_legacy/step1';

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
  .add('List - Table', () => (
    <List title="datasets" headers={headers} collection={pokemons} />
  ))
  .add('List - Large', () => (
    <List
      title="datasets"
      headers={headers}
      collection={pokemons}
      displayMode="large"
    />
  ))
  .add('Step 1', () => (
    <Step1ComplexList
      toolbar={{ actions }}
      list={{
        title: 'datasets',
        headers,
        collection: pokemons
      }}
    />
  ));
