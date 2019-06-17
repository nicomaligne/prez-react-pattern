import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ListSelectAllPropTypes } from './propTypes';
import { useListContext } from './listContext';

const ListSelectAll = ({ onSelectAll }) => {
  const { id } = useListContext();
  return <SelectAll id={`${id}-select`} onClick={onSelectAll} />;
};

ListSelectAllPropTypes.propTypes = ListSelectAllPropTypes;

export default ListSelectAll;

