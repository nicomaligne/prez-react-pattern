import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';
import ComplexList from './ComplexList';

export default function Step3() {
  const [displayMode, setDisplayMode] = useState('table');

  return (
    <ComplexList
      id="my-list"
      displayMode={{
        value: displayMode,
        onChange: setDisplayMode
      }}
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
