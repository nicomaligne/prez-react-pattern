import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

const ExternalLogicalDisplayMode = ({ children }) => {
  const [displayModeValue, setDisplayModeValue] = useState('large');
  const onChangeDisplayMode = value => {
    console.log('this is my custon onChange display mode');
    setDisplayModeValue(value);
  };
  return (
    <React.Fragment>
      {children(displayModeValue, onChangeDisplayMode)}
    </React.Fragment>
  );
};

export const Step4ControlledDisplayMode = () => {
  return (
    <ExternalLogicalDisplayMode>
      {(displayModeValue, onChangeDisplayMode) => (
        <List.Manager id={'myContextId'}>
          <List.Toolbar>
            <List.SelectAll onSelectAll={action('onSelectAll')} />
            <List.Actions actions={actions} />
            <List.DisplayMode
              value={displayModeValue}
              onChange={onChangeDisplayMode}
            />
          </List.Toolbar>
          <List.List
            title="datasets"
            headers={headers}
            collection={pokemons}
            displayModeValue={displayModeValue}
          />
        </List.Manager>
      )}
    </ExternalLogicalDisplayMode>
  );
};
