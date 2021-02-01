// Step 1: toolbar + list + select all
// props growth + conditional render

import React from 'react';
import { ComplexListPropTypes, ToolbarPropTypes } from './propTypes';

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
Toolbar.propTypes = ToolbarPropTypes;

export default function ComplexList(props) {
  const { id, toolbar, list } = props;

  return (
    <React.Fragment>
      <nav className="toolbar">
        {onSelectAll && <SelectAll id={`${id}-select`} onClick={onSelectAll} />}
        {actions && <Actions className="toolbar-actions" actions={actions} />}
      </nav>
      <List id={`${id}-list`} {...list} />
    </React.Fragment>
  );
}
ComplexList.propTypes = ComplexListPropTypes;
