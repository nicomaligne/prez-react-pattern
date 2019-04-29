// Step 3: display mode
// syncho via ComplexList props

import React from 'react';
import PropTypes from 'prop-types';

import SelectAll from '../../common/SelectAll.component';
import Actions from '../../common/Actions.component';
import DisplayMode from '../../common/DisplayMode.component';
import List from '../../common/List.component';

import '../../common/toolbar.scss';

function Toolbar(props) {
  const { actions, displayMode, id, onSelectAll } = props;

  return (
    <nav className="toolbar">
      {onSelectAll && <SelectAll id={`${id}-select`} onClick={onSelectAll} />}
      {actions && <Actions className="toolbar-actions" actions={actions} />}
      {displayMode && <DisplayMode {...displayMode} />}
    </nav>
  );
}
Toolbar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  displayMode: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),
  onSelectAll: PropTypes.func
};

export default function ComplexList(props) {
  const { id, displayMode, toolbar, list } = props;

  return (
    <React.Fragment>
      <Toolbar id={`${id}-toolbar`} displayMode={displayMode} {...toolbar} />
      <List
        id={`${id}-list`}
        displayMode={displayMode && displayMode.value}
        {...list}
      />
    </React.Fragment>
  );
}
ComplexList.propTypes = {
  id: PropTypes.string.isRequired,

  // new feature: sort
  displayMode: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),

  toolbar: PropTypes.shape({
    actions: PropTypes.arrayOf(PropTypes.object),
    onSelectAll: PropTypes.func
  }),
  list: PropTypes.shape({
    collection: PropTypes.arrayOf(PropTypes.object),
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        type: PropTypes.string
      })
    ),
    title: PropTypes.string
  })
};
