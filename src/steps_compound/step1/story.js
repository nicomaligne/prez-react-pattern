import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

export const Step1NoToolbar = () => {
  return (
    <div>
      <List.Table
        id={'my-list'}
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
      <List.Toolbar>
        <List.SelectAll id={'my-list'} onSelectAll={action('onSelectAll')} />
      </List.Toolbar>
      <List.Table
        id={'my-list'}
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
      <List.Toolbar >
        <List.Actions actions={actions} id={'my-list'} />
        <List.SelectAll onSelectAll={action('onSelectAll')} id={'my-list'} />
      </List.Toolbar>
      <List.Table
        id={'my-list'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </div>
  );
};
