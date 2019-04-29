// Step 2: toolbar + list + select all
// props growth + conditional render

import React from 'react';
import PropTypes from 'prop-types';

import SelectAll from '../../common/SelectAll.component';
import Actions from '../../common/Actions.component';
import List from '../../common/List.component';

import '../../common/toolbar.scss';

function Toolbar(props) {
  const { actions, id, onSelectAll } = props;

  return (
    <nav className="toolbar">
      {onSelectAll && <SelectAll id={`${id}-select`} onClick={onSelectAll} />}
      {actions && <Actions className="toolbar-actions" actions={actions} />}
    </nav>
  );
}
Toolbar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  onSelectAll: PropTypes.func
};

export default function ComplexList(props) {
  const { id, toolbar, list } = props;

  return (
    <React.Fragment>
      <Toolbar id={`${id}-toolbar`} {...toolbar} />
      <List id={`${id}-list`} {...list} />
    </React.Fragment>
  );
}
ComplexList.propTypes = {
  id: PropTypes.string.isRequired,
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
