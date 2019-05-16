import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';

const ToolbarSelectAll = ({ id, actions }) => (
  <SelectAll id={`${id}-select`} onClick={onSelectAll} />
);

export default ToolbarSelectAll;
