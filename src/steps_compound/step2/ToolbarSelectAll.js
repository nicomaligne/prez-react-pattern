import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ToolbarSelectAllPropTypes } from './propTypes';

const ToolbarSelectAll = ({ id, onSelectAll }) => (
  <SelectAll id={`${id}-select`} onClick={onSelectAll} />
);

ToolbarSelectAll.propTypes = ToolbarSelectAllPropTypes;

export default ToolbarSelectAll;
