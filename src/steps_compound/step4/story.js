import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

export const Step4ControlledDisplayMode = () => {
  return (
    <List.Manager id={'myContextId'}>
      <List.Toolbar>
        <List.SelectAll onSelectAll={action('onSelectAll')} />
        <List.Actions actions={actions} />
        <List.DisplayMode
          onChange={action('this is my custon onChange display mode')}
          value="table"
        />
      </List.Toolbar>
      <List.List
        collection={pokemons}
        displayModeValue="table"
        headers={headers}
        title="datasets"
      />
    </List.Manager>
  );
};
