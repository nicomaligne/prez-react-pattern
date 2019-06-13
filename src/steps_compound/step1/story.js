import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import CompoundList from './index';

export const Step1NoToolbar = () => {
  return (
    <div>
      <CompoundList.List
        id={'myList_3'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </div>
  );
};

export const Step1SelectAll = () => {
  return (
    <div>
      <CompoundList.Toolbar id={'myToolbarId'}>
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
      <CompoundList.List
        id={'myList_1'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </div>
  );
};

export const Step1ListInverted = () => {
  return (
    <div>
      <CompoundList.List
        id={'myList_2'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
      <CompoundList.Toolbar id={'myToolbarId'}>
        <CompoundList.ToolbarActions actions={actions} />
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
    </div>
  );
};
