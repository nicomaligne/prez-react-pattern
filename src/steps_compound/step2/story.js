import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import CompoundList from './index';

export const Step2SelectAll = () => {
  return (
    <CompoundList.Manager id={'listWithSelectAll'}>
      <CompoundList.Toolbar>
        <CompoundList.SelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </CompoundList.Manager>
  );
};

export const Step2ActionsAndSelectInverted = () => {
  return (
    <CompoundList.Manager id={'listWithInvertedItems'}>
      <CompoundList.Toolbar>
        <CompoundList.Actions actions={actions} />
        <CompoundList.SelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </CompoundList.Manager>
  );
};

export const Step2NoToolbar = () => {
  return (
    <CompoundList.Manager id={'listWithNoToolbar'}>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </CompoundList.Manager>
  );
};
