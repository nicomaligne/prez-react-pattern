import React from 'react';
import CommonSelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ToolbarSelectAllPropTypes } from './propTypes';
import { useContextList } from './contextList';

const ToolbarSelectAll = ({ onSelectAll }) => {
  const { id } = useContextList();
  return <CommonSelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

ToolbarSelectAll.propTypes = ToolbarSelectAllPropTypes;

export default ToolbarSelectAll;

