import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ToolbarSelectAllPropTypes } from './propTypes';
import { useContextCompoundList } from './contextCompoundList';

const ToolbarSelectAll = ({ onSelectAll }) => {
  const { id } = useContextCompoundList();
  return <SelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

ToolbarSelectAll.propTypes = ToolbarSelectAllPropTypes;

export default ToolbarSelectAll;
