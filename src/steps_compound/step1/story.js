import React from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import CompoundList from './index';

console.log({ CompoundList})

export const Step1SelectAll = () => {
  return (
    <React.Fragment>
      <CompoundList.Toolbar id={'myToolbarId'}>
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
      <CompoundList.List
        id={'myList_1'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </React.Fragment>
  );
};

export const Step1ActionsAndSelectInverted = () => {
  return (
    <React.Fragment>
      <CompoundList.Toolbar id={'myToolbarId'}>
        <CompoundList.ToolbarActions actions={actions} />
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
      </CompoundList.Toolbar>
      <CompoundList.List
        id={'myList_2'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </React.Fragment>
  );
};

export const Step1NoToolbar = () => {
  return (
    <React.Fragment>
      <CompoundList.List
        id={'myList_3'}
        title="datasets"
        headers={headers}
        collection={pokemons}
      >
        /
      </CompoundList.List>
      >
    </React.Fragment>
  );
}

/*
export const Step1Default = () => {} ???
*/
