import React from 'react';
import CommonSelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { SelectAllPropTypes } from './propTypes';
import { useContextCompoundList } from './contextCompoundList';

const SelectAll = ({ onSelectAll }) => {
  const { id } = useContextCompoundList();
  return <CommonSelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

SelectAll.propTypes = SelectAllPropTypes;

export default SelectAll;
