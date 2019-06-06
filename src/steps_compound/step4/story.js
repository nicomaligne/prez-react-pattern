import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import List from './index';

const ExternalLogicalDisplayMode = ({ children }) => {
  const [increment, setIncrement] = useState(0);
  const [outsideValue, setOutsideValue] = useState('large');
  const onChangeOutsideValue = value => {
    setIncrement(increment + 1);
    if (increment === 2) {
      action('do something');
      setOutsideValue(value);
      setIncrement(0);
    }
  };
  return (
    <React.Fragment>
      {children(outsideValue, onChangeOutsideValue)}
    </React.Fragment>
  );
};

export const Step4ControlledDisplayMode = () => {
  return (
    <ExternalLogicalDisplayMode>
      {(outsideValue, onChangeOutsideValue) => (
        <List.Manager id={'myContextId'}>
          <List.Toolbar>
            <List.SelectAll
              onSelectAll={action('onSelectAll')}
            />
            <List.Actions actions={actions} />
            <List.DisplayMode
              displayModeValue={outsideValue}
              setDisplayModeValue={onChangeOutsideValue}
            />
          </List.Toolbar>
          <List.List
            title="datasets"
            headers={headers}
            collection={pokemons}
            displayModeValue={outsideValue}
          />
        </List.Manager>
      )}
    </ExternalLogicalDisplayMode>
  );
};
