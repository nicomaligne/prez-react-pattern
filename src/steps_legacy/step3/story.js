import React, { useState, useMemo } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';
import ComplexList from './ComplexList';

const sortOptions = ['id', 'name', 'height', 'weight'];

export default function Step3() {
  const [displayMode, setDisplayMode] = useState('table');
  const [sortValue, setSort] = useState({
    sortBy: sortOptions[0],
    desc: false
  });
  const collection = useMemo(() => {
    return pokemons.slice(0).sort((a, b) => {
      const aValue = a[sortValue.sortBy];
      const bValue = b[sortValue.sortBy];
      const orderSign = sortValue.desc ? -1 : 1;
      if (typeof aValue === 'number') {
        return (aValue - bValue) * orderSign;
      }
      return aValue.localeCompare(bValue) * orderSign;
    });
  }, [sortValue]);

  return (
    <ComplexList
      id="my-list"
      displayMode={{
        value: displayMode,
        onChange: setDisplayMode
      }}
      sort={{
        onChange: setSort,
        options: sortOptions,
        value: sortValue
      }}
      toolbar={{
        actions,
        onSelectAll: action('onSelectAll')
      }}
      list={{
        title: 'datasets',
        headers,
        collection
      }}
    />
  );
}
