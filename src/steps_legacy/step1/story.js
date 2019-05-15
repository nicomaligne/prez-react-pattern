import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';
import ComplexList from './ComplexList';

export default function Step1() {
  return (
    <ComplexList
      id="my-list"
      toolbar={{
        actions,
        onSelectAll: action('onSelectAll')
      }}
      list={{
        title: 'datasets',
        headers,
        collection: pokemons
      }}
    />
  );
}
