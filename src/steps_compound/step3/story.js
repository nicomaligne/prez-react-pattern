import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import pokemons from '../../data/pokemons';
import { headers, actions } from '../../data/list-config';

import CompoundList from './index';

export const Step3UncontrolledDisplayMode = () => {
  return (
    <CompoundList.Manager id={'myContextId'}>
      <CompoundList.Toolbar>
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
        <CompoundList.ToolbarActions actions={actions} />
        <CompoundList.ToolbarDisplayMode />
      </CompoundList.Toolbar>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </CompoundList.Manager>
  );
};

export const Step3UncontrolledDisplayModeWithInitialState = () => {
  return (
    <CompoundList.Manager id={'myContextId'}>
      <CompoundList.Toolbar>
        <CompoundList.ToolbarSelectAll onSelectAll={action('onSelectAll')} />
        <CompoundList.ToolbarActions actions={actions} />
        <CompoundList.ToolbarDisplayMode initialDisplayMode="large" />
      </CompoundList.Toolbar>
      <CompoundList.List
        title="datasets"
        headers={headers}
        collection={pokemons}
      />
    </CompoundList.Manager>
  );
};

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

export const Step3ControlledDisplayMode = () => {
  return (
    <ExternalLogicalDisplayMode>
      {(outsideValue, onChangeOutsideValue) => (
        <CompoundList.Manager id={'myContextId'}>
          <CompoundList.Toolbar>
            <CompoundList.ToolbarSelectAll
              onSelectAll={action('onSelectAll')}
            />
            <CompoundList.ToolbarActions actions={actions} />
            <CompoundList.ToolbarDisplayMode
              displayModeValue={outsideValue}
              setDisplayModeValue={onChangeOutsideValue}
            />
          </CompoundList.Toolbar>
          <CompoundList.List
            title="datasets"
            headers={headers}
            collection={pokemons}
            displayModeValue={outsideValue}
          />
        </CompoundList.Manager>
      )}
    </ExternalLogicalDisplayMode>
  );
};
