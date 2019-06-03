import React from 'react';
import CommonSelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ToolbarSelectAllPropTypes } from './propTypes';
import { useContextCompoundList } from './contextCompoundList';

const ToolbarSelectAll = ({ onSelectAll }) => {
  const { id } = useContextCompoundList();
  return <CommonSelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

ToolbarSelectAll.propTypes = ToolbarSelectAllPropTypes;

export default ToolbarSelectAll;

