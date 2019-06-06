import React from 'react';
import CommonSelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { SelectAllPropTypes } from './propTypes';
import { useContextList } from './contextList';

const SelectAll = ({ onSelectAll }) => {
  const { id } = useContextList();
  return <CommonSelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

SelectAll.propTypes = SelectAllPropTypes;

export default SelectAll;

