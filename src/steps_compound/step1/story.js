import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

export const Step1NoToolbar = () => {
  return (
    <div>
      <List.Table
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
      <List.Toolbar id={'myToolbarId'}>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
      </List.Toolbar>
      <List.Table
        id={'myList_1'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </div>
  );
};

export const Step1ActionsAndSelectInverted = () => {
  return (
    <div>
      <List.Toolbar id={'myToolbarId'}>
        <List.Actions actions={actions} />
        <List.SelectAll onSelectAll={action('onSelectAll')} />
      </List.Toolbar>
      <List.Table
        id={'myList_2'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </div>
  );
};
