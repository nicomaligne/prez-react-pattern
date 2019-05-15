// Step 2: display mode
// syncho via ComplexList props

import React from 'react';

import SelectAll from '../../common/SelectAll.component';
import Actions from '../../common/Actions.component';
import DisplayMode from '../../common/DisplayMode.component';
import List from '../../common/List.component';

import '../../common/toolbar.scss';
import { ComplexListPropTypes, ToolbarPropTypes } from './propTypes';

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
Toolbar.propTypes = ToolbarPropTypes;

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
ComplexList.propTypes = ComplexListPropTypes;
