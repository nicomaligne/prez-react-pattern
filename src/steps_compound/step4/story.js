import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

export const Step4UncontrolledDisplayMode = () => {
  return (
    <List.Manager id={'my-list'}>
      <List.Toolbar>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
        <List.Actions actions={actions} />
        <List.DisplayMode />
      </List.Toolbar>
      <List.Table title="datasets" headers={headers} collection={pokemons} />
    </List.Manager>
  );
};

export const Step4UncontrolledDisplayModeWithInitialState = () => {
  return (
    <List.Manager id={'my-list'} initialDisplayMode="large">
      <List.Toolbar>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
        <List.Actions actions={actions} />
        <List.DisplayMode />
      </List.Toolbar>
      <List.Table title="datasets" headers={headers} collection={pokemons} />
    </List.Manager>
  );
};
