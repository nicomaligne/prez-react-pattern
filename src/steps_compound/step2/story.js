import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import CompoundList from './index';

export const Step2ActionsAndSelect = () => {
  return (
    <CompoundList.Manager id={'myContextId'}>
      <CompoundList.Toolbar>
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
        <CompoundList.ToolbarActions actions={actions} />
      </CompoundList.Toolbar>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </CompoundList.Manager>
  );
};
