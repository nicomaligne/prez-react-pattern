import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

export const Step3UncontrolledDisplayMode = () => {
  return (
    <List.Manager id={'myContextId'}>
      <List.Toolbar>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
        <List.Actions actions={actions} />
        <List.DisplayMode />
      </List.Toolbar>
      <List.Table title="datasets" headers={headers} collection={pokemons} />
    </List.Manager>
  );
};

export const Step3UncontrolledDisplayModeWithInitialState = () => {
  return (
    <List.Manager id={'myContextId'}>
      <List.Toolbar>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
        <List.Actions actions={actions} />
        <List.DisplayMode initialDisplayMode="large" />
      </List.Toolbar>
      <List.Table title="datasets" headers={headers} collection={pokemons} />
    </List.Manager>
  );
};
